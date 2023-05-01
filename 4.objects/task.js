function Student(name, gender, age) {
	Object.assign(this, { name, gender, age, marks: [] });
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
	if (!this.marks) return;

	this.marks.push(...marks);
};

Student.prototype.getAverage = function () {
	if (!this.marks || !this.marks.length) return 0;

	return this.marks.reduce((avg, mark, _, marks) => {
		return avg + mark / marks.length;
	}, 0);
};

Student.prototype.exclude = function (reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
};
