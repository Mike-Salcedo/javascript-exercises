const findTheOldest = function (people) {
  people.map((person) => { // If someone doesn't have a Year of Death make current year the Death date
    if (person.yearOfDeath == undefined)
      return (person.yearOfDeath = new Date().getFullYear());
  });

  return people.reduce((personA, personB) => { // Compare each persons years lived and return the oldest
    const personOne = personA.yearOfDeath - personA.yearOfBirth;
    const personTwo = personB.yearOfDeath - personB.yearOfBirth;
    return personOne > personTwo ? personA : personB;
  }, 0);
};




// Do not edit below this line
module.exports = findTheOldest;
