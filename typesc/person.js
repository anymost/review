var Person;
(function (Person) {
    Person.name = 'jack';
})(Person || (Person = {}));
function Hello(name) {
    console.log(name);
}
Hello('hello');
//# sourceMappingURL=person.js.map