/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/startswith
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "firstName";
  const searchMethod4 = "includes";
  const expected4 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
  ];
  
  /**
   * Filters the given items based on the search criteria using a startsWith
   * search method.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Object>} items The items to be filtered.
   * @param {string} searchBy The key to search by.
   * @param {string} searchFor The value of the given key to search for.
   * @returns {Array<Objects>} The matched items.
   */
//    function filterByKey(items, searchFor, searchBy, searchMethod) {
//        let evalualted = eval(searchMethod + '')
//     return items.filter((item) => item[searchBy].searchMethod(searchFor));
//   }
function filterByKey(items, searchFor, searchBy, searchMethod) {
    switch(searchMethod){
      case 'startsWith':
        return items.filter((item) => item[searchBy].startsWith(searchFor));
      case 'includes':
        return items.filter((item) => item[searchBy].includes(searchFor));
    }
  }
console.log(filterByKey(people, searchFor4, searchBy4, 'includes')  )
  
  module.exports = { filterByKey };
  
  /*****************************************************************************/
  
  /* 
    Given an array of person objects with the following keys:
      firstName[string]
      lastName[string]
      friends[arr of friend objects]
      isSocialDistancing[bool]
      Friend object keys:
        firstName[string]
        lastName[string]
        isSocialDistancing[bool]
        hasCovid[bool]
      return a new array of the names of people (not friends) who are at high risk of infection
      A person is at high risk of catching the virus if they meet all the below criteria:
      1. not practicing social distancing
      2. have a friend who is not practicing social distancing whom hasCovid
      Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
  */
  
  const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
  };
  
  const people1 = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
  ];
  
  const expected = ["Person One", "Person Three"];
  
  // /**
  //  * @typedef {Object} Friend
  //  * @property {string} firstName
  //  * @property {string} lastName
  //  * @property {boolean} isSocialDistancing
  //  * @property {boolean} hasCovid
  //  *
  //  * @typedef {Object} Person
  //  * @property {Array<Friend>} friends
  //  * @property {string} firstName
  //  * @property {string} lastName
  //  * @property {boolean} isSocialDistancing
  //  */
  
  /**
   * Finds the people who are at risk of contracting Covid.
   * - Time O(?).
   * - Space O(?).
   * @param {Array<Person>} persons
   * @returns {Array<string>} An array of Person full names for those people who
   *    are at risk. A Person is at risk if:
   *    1. not practicing social distancing.
   *    2. have a friend who is not practicing social distancing whom hasCovid.
   */
   function coronaVirusAtRisk(persons) {
    let returnArr = []
    for (let y =0; y < persons.length; y++) {
      if (!persons[y].isSocialDistancing) {
        //check whether friends are practicing distancing
        //check if non distancing friends have covid
        for (let index = 0; index < persons[y].friends.length; index++) {
          if(!persons[y].friends[index].isSocialDistancing && persons[y].friends[index].hasCovid){
            returnArr.push(`${persons[y].firstName} ${persons[y].lastName}`)
          }
        }
      }
    }
    let set = new Set(returnArr)
    return [...set]
  }
  console.log(coronaVirusAtRisk(people1))
  /**
   * - Time O(?).
   * - Space O(?).
   */
  function coronaVirusAtRiskFunctional(persons) {}
  