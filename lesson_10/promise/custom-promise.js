const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class CustomPromise {

    __success__ = [];
    __error__ = [];
    _state = PENDING;
    _value = null;

    constructor(callback) {
        this._callback = callback;

        setTimeout(() => {
            this._callback(this._resolve.bind(this), this._reject.bind(this));
        }, 0);
    }

    static resolve(value) {
        return new CustomPromise((resolve, reject) => {
            resolve(value);
        });
    }

    static reject(value) {
        return new CustomPromise((resolve, reject) => {
            reject(value);
        });
    }

    then(successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
    };

    catch(rejectCb) {
        this.then(null, rejectCb);
    }

    _resolve(result) {
        console.log(this._state);
        if (this._state !== PENDING) {
            return;
        }
        this.__success__.forEach( cb => cb(result) );
        this._state = FULFILLED;
        this._value = result;
    }

    _reject(err) {
        console.log(this._state);
        if (this._state !== PENDING) {
            return;
        }
        this.__error__.forEach( cb => cb(err) );
        this._state = REJECTED;
        this._value = err;
    };
}
