const CustomPromise = function (callback) {
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;
    this._state = PENDING;
    this._value = null;

    this._executeCallback = function (cb, result) {
        setTimeout(() => {
            const res = cb(result);
            if (res instanceof CustomPromise) {
                this.then(this._resolve.bind(res), this._reject.bind(res));
            } else {
                this._resolve(res)
            }
        }, 0)
    };

    this.then = function (successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
        if (this.status === FULFILLED) {
            this._executeCallback(successCb, this._value)
        }
        if (this.status === REJECTED) {
            this._executeCallback(rejectCb, this._value)
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
        this._value = result;
        // this.__success__.forEach( cb => cb(result) );
        this.__success__.forEach( (cb) => {
            this._executeCallback(cb, result)
        });
    };

    this._reject = function (err) {
        console.log(this._state);
        if (this._state !== PENDING) {
            return;
        }
        this._state = REJECTED;
        this._value = err;
        // this.__error__.forEach( cb => cb(err) );
        this.__error__.forEach( (cb) => {
            this._executeCallback(cb, err)
        });
    };

    this.getState = function() {
            return this._state;
        };

    this.resolve = function(result) {
      try{
          this._resolve(result)
      } catch (err) {
          this._reject(err)
      }
    };

    this.reject = function(err) {
        this._reject(err);
    };

    setTimeout(() => {
        this._callback(this._resolve.bind(this), this._reject.bind(this));
    }, 0);
};