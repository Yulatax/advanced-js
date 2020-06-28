let promise = new CustomPromise((resolve, reject) => {
    setTimeout( () => {resolve(1)}, 1000);
    setTimeout( () => {reject(1)}, 1000);
});
console.log(promise.getState());
promise.then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value * 2);
}).then((value) => {
    console.log(value * 3);
});
promise.catch(err => {
    console.log('Rejected', err);
});