// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// function findMatching( drivers)
// {
//    return console.log(drivers)
// }
// findMatching(drivers)
// findMatching(drivers[0])
// findMatching(drivers[1])

// function findMatching(array) {
//     for (const drivers of array) {
//       console.log(drivers);
//     }
//   }
  
//   findMatching(drivers);

  function findMatching(drivers,name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(drivers,'Bobby'))


  function fuzzyMatch(drivers, letters)
  {

    return drivers.filter(driver => driver.startsWith(letters));
  }
  console.log(fuzzyMatch(drivers,"sa"))


  function matchName(drivers, name) {
    // const drivers = [
    //   {
    //     name: 'Bobby',
    //     hometown: 'Pittsburgh' },
    //   {
    //     name: 'Sammy',
    //     hometown: 'New York' } ,
    //   {
    //     name: 'Sally',
    //     hometown: 'Cleveland' },
    //   {
    //     name: 'Annette',
    //     hometown: 'Los Angeles' },
    //   {
    //     name: 'Bobby',
    //     hometown: 'Tampa Bay' }
    // ];
    return drivers.filter(driver => driver.name === name);
  }