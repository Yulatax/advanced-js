const promise = new CustomPromise((resolve, reject) => {
    setTimeout( () => {resolve(1)}, 1000);
    setTimeout( () => {reject(1)}, 1000);
});

promise.then((value) => {
    console.log(value);
});
promise.then((value) => {
    console.log(value * 2);
});
promise.catch(err => {
    console.log('Rejected', err);
});

const promise2 = CustomPromise.resolve(5);
promise2.then((res) => {
    console.log(res);
});

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout( () => {resolve(1)}, 1000);
//     setTimeout( () => {reject(1)}, 1000);
// });
//
// promise3.then((value) => {
//     console.log(value);
// });
// promise3.then((value) => {
//     console.log(value * 2);
// });
// promise3.catch(err => {
//     console.log('Rejected', err);
// });
//
// const promise4 = Promise.resolve(5);
// promise4.then((res) => {
//     console.log(res);
// });