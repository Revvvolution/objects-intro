                                    /* Practice: Accessing Property Values */

                    /*
                        #1:

                    Given the object below, output each of the values to your terminal using dot notation.
                    */                                    
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)

// You can also use dot notation to create a new key on an object if you need to:
wardrobe.material = "Cedar";
/*
 You just added a new key to the object stored in the wardrobe variable. If you 
output it to the terminal, you will see it along with the others that were already defined.
*/
console.log(wardrobe)




                    /*
                        #2:

                    Time to practice dot and square-bracket notation. Use the following object to complete the exercises below:
                    */

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// 1. - Use dot notation to output all of the dimensions of the Empire State Building to the terminal.
console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)
/*
   2. - Use square bracket notation to output the remaining 5 properties to the terminal. Create 5 variables 
        first with the keys as their values. Use those variables to look up the values.
*/

const detailOne = "address";
const detailTwo = "constructionDate";
const detailThree = "cost";
const detailFour = "owner";
const detailFive = "architect"

const where = empireStateBuilding[detailOne]
const when = empireStateBuilding[detailTwo]
const price = empireStateBuilding[detailThree]
const belongsTo = empireStateBuilding[detailFour]
const designedBy = empireStateBuilding[detailFive]

console.log(where)
console.log(when)
console.log(price)
console.log(belongsTo)
console.log(designedBy);



                    /*
                        #3:

                    Utilize the object below to complete the exercises:
                    */

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
 
// 1. - Output the names of the part-time instructors followed by the names of the full-time instructors in the terminal.
const shortWeek = nashvilleSoftwareSchool.instructors.partTime;
const longWeek = nashvilleSoftwareSchool.instructors.fullTime;

console.log(shortWeek)
console.log(longWeek)

// 2. - Output only Andy and Zoe in the terminal.
console.log(longWeek[4])
console.log(shortWeek[0])
