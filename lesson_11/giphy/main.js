'use strict';

const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const GIPHY_API_KEY = 'OHXRgAi1pWtNU5RqdiGCOmzBmrcv6jAf';
const DELAY = 500;
const cache = {};

const searchForm = document.querySelector('#searchForm');
const container = document.querySelector('.gifs-wrapper');

if (searchForm) {
    const inputField = searchForm.querySelector('#kword');
    inputField.addEventListener('keyup', throttle(giphySearch, DELAY));
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        searchForm.reset();
    })
}

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

function giphySearch(event) {

    const value = event.target.value;
    const url = `${BASE_URL}?api_key=${GIPHY_API_KEY}&q=${value}`;

    if (cache[value]) {
        console.log(`Cash ${value}`);
        renderGifs(cache[value], container);
        return;
    }

    let response = fetch(url)
        .then(response => response.json())
        .then(data => {
            cache[value] = data.data;
            console.log(`API ${value}`);
            renderGifs(data.data, container);
        })
        .catch(err => {
            console.error('Error:', err);
        })
}

function renderGifs(data, container) {
    container.innerHTML = '';
    console.log(data);
    data.forEach(gif => {
        const image = document.createElement('img');
        image.src = gif.images.fixed_height_small_still.url;
        image.style.cssText = "padding: 5px";
        container.append(image);
    });
}
