let ticketForm = document.querySelector('#ticketForm');

if (ticketForm) {
    ticketForm.addEventListener('submit', ticketFormHandler);
    let controls = ticketForm.querySelectorAll('.form-control');
    Array.from(controls).forEach(elem => elem.addEventListener('focus', removeErrorMessage));
}

function ticketFormHandler(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let [name, flight, type, hour, min] = [
        form.elements.fname.value,
        form.elements.flight.value,
        +form.elements.fclass.value,
        +form.elements.hours.value,
        +form.elements.minutes.value
    ];
    let res;
    try {
        res = buyTicket(bigWorld, flight, makeTime(hour, min), name, type);
    } catch (err) {
        showError(err.message);
        return;
    }
    bigWorld = res.world;
    console.log(bigWorld);
    form.reset();
}

function showError(message) {
    let elem = document.querySelector('.error-message');
    elem.textContent = message;
    elem.style.display = 'block';
}

function removeErrorMessage() {
    let elem = document.querySelector('.error-message');
    elem.style.display = 'none';
}
