const CustomPromise = function (callback) {
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;
    this._state = PENDING;

    this.then = function (successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
            console.log(this.__success__);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
        return this;
    };

    this.catch = function (rejectCb) {
        this.then(null, rejectCb);
    };

    this._resolve = function (result) {
        console.log(this._state);
        if (this._state !== PENDING) {
            return;
        }
        this._state = FULFILLED;
        this.__success__.forEach( cb => cb(result) );
        console.log(this._state);
    };

    this._reject = function (err) {
        console.log(this._state);
        if (this._state !== PENDING) {
            return;
        }
        this._state = REJECTED;
        this.__error__.forEach( cb => cb(err) );
        console.log(this._state);
    };

    this.getState = function() {
        return this._state;
    };

    setTimeout(() => {
        this._callback(this._resolve.bind(this), this._reject.bind(this));
    }, 0);
};