function Group(number) {
    this.number = number;
    this.students = [];

    this.addStudent = function (student) {
        if (this._isStudentInGroup(student)) {
            throw new Error('Student is already in this group');
        }
        this.students.push(student);
    };

    this.absentList = function () {
        return this.students.filter(student => !student.getHealthState());
    };

    this._isStudentInGroup = function (student) {
        return this.students.some(stud => stud.fullName() === student.fullName());
    }
}