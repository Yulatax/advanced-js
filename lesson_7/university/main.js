const group1 = new Group('MT18-01');

for (let i = 1; i <= 20; i++) {
    const student = new Student(`Student${i} Student${i} Student${i}`);
    group1.addStudent(student);
}

// const newStudent = new Student('Student1 Student1 Student1');
// group1.addStudent(newStudent);

for (let n = 0; n < 5; n++) {
    const ind = Math.floor( 1 + Math.random() * (20 + 1 - 1));
    group1.students[ind].feelSick();
}

console.log(group1.absentList());