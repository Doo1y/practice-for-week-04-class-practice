class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
      );
  }

  static introducePeople(person) {
    if (!Array.isArray(person)) {
      console.log("introducePeople only takes an array as an argument.");
    } else if (person.some(member => (member instanceof Person) === false)) {
      console.log("All items in array must be Person class instances.");
    } else {
      person.forEach(member => member.introduce());
    }
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}