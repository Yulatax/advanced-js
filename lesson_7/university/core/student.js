function Student(name) {
    let [lName, fName, mName] = name.split(' ');

    this._healthy = true;
    this.lastName = lName;
    this.firstName = fName;
    this.middleName = mName;

    this.fullName = function () {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    };

    this.initials = function () {
        return `${this.lastName} ${this.firstName[0]}. ${this.middleName[0]}.`
    };

    this.getHealthState = function () {
        return this._healthy;
    };

    this.feelSick = function () {
        this._healthy = false;
    }
}