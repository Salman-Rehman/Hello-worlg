task 1

let personName: string = "Eric";
console. log(`Hello ${personName},would you like to learn some python today?`);


task 2

let personName: string = "Eric";
console. log(`Hello ${personName},would you like to learn some python today?`);


task 3

let personName: string = "Salman Zada";
in lowercase
console.log("lowercase:", personName.toLowerCase());
in uppercase
console.log("uppercase:", personName.toUpperCase());
title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

task 4

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein";
console. log(`${author} once said, "${quote}"`);


task 5

let famous_person: string ="Albert Einstein";
let message: string = `${famous_person} once said,"${quote}"`;
console.log (message); 

task 6

let personName: string = "\t\n John Doe \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());


task 7

console.log(5 + 3);
console.log(10 -2);
console.log(4 * 2);
console.log(16/2);


task 9

let favoriteNumber: Number = 5553;
console.log (`my favorite Number is ${favoriteNumber}.`);

task 10

author: [salmam zada]
date: [Thusday ,Febu 12 ,2024]

task 9:printing my favourite number.
let favourite: number = 5553

reveling my favourite number in a message formate.
console.log (`my favourite number is ${favourite}.`);

Assignment Solution

Task 11


let names : string [] = ["Kashif","Ubaid","Ibrahim","Saqib"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


task12
let names : string [] = ["Kashif","Ubaid","Ibrahim","Saqib"];

let message : string = "Do you like to play football?"
console.log(names[0] + " "+ message )
console.log(names[1] + " "+ message )
console.log(names[2] + " "+ message )
console.log(names[3] + " "+ message )


task13

let transpotation : string [] = ["Honda motocyle","Super power motocyle", "Honda Civic"];
transpotation.map((items) => console.log(`i would like to own a ${items}`));


task 14
let guestArr : string [] = ["Kashif","Ubaid","Ibrahim"];

guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner`)));


Task 15
let guestArr : string[] = ("Kashif","Ibrahim", "Saqib","Ubaid",);
let canNotAttend : string = "Kashif"

//console. log(canNotAttend + " " "can not attend the dinner.")

let newGuest : string = "Mujahid"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

//console.log(guestArr)

guestArr.map((items) => 
console.log(`Dear ${items}, you are invited to the dinner.` ) 
)

//Task 16
let guestArr : string[] = ["Mujahid", "Ibrahim", "Ubaid", "Saqib"];

let canNotAttend : string = "Hassan"

 let newGuest : string = "Faisal"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
// );

//Part 2 Began
let guestBeg : string = "Ali"
guestArr.unshift (guestBeg);
console.log 

//Part 3 Middle
let middleGuest : string = "Fahad"
let middleIndex =guestArr.length/3
guestArr.splice(middleIndex,3,middleGuest)
console.log(guestArr)
//part 4 append 
guestArr.push("Salman")
console.log(guestArr)
//part 5
guestArr.map((items) =>
console.log(`Dear ${items},you are invited in the more people list on dinnes`));



//Task 16
let guestArr : string[] = ["Mujahid", "Ibrahim", "Ubaid", "Saqib"];

let canNotAttend : string = "Hassan"

 let newGuest : string = "Faisal"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
// );

//Part 2 Began
let guestBeg : string = "Ali"
guestArr.unshift (guestBeg);
console.log 

//Part 3 Middle
let middleGuest : string = "Fahad"
let middleIndex =guestArr.length/3
guestArr.splice(middleIndex,3,middleGuest)
console.log(guestArr)
//part 4 append 
guestArr.push("Salman")
console.log(guestArr)
//part 5
guestArr.map((items) =>
console.log(`Dear ${items},you are invited in the more people list on dinnes`));

Task17
list of guests 
let guests: string[] =["Abid", "Arman",];

Informing that only two people can be invited
console.log("Dua to limited space, only two people can be invited people.");

Reamoving guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop(); // Remove the last guest from the list
    console.log("Sorry, $(removedGuest,  you are no longer invited to dinner.");
}
printing invitation to the reamining two guests
 guests.forEach((guest) => {
     console.log(`Dear ${guest}, you are still invited to dinner,`);
   });

   Removing the last two names from the list
   guests.pop();
   guests.pop();
   Printing the final list to confrom it is empty
   console.log("final guest list:",);


Task:18

Store the locations in an array
let placesTovisit: string[] = ["Pakistan", "America", "China", "JApan", "Malysia",];


console.log("Original order:", placesTovisit);

console.log("Alphabetical order:", [...placesTovisit].sort());

console.log("orinal order after sorting:", placesTovisit);

console.log("Reverse alphabetical order:",[...placesTovisit].sort().reverse()); 

console.log("original order after reverse sorting:", placesTovisit);


placesTovisit.reverse();
console.log("Reversed order:", placesTovisit)

placesTovisit.reverse();
console.log("Back to orginal order:", placesTovisit);

placesTovisit.sort();
console.log("Sorted in alphabetical order:", placesTovisit)

placesTovisit.sort((a, b) => b. localeCompare(a));
console.log("sorted in reverse alpabetical order:", placesTovisit)


Task:22

const days: string [] = ["sunday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days{7})
console.log(days[6])

Task:23
let car = "subaru";

console.log("is car == `subaru`? predict true")
console.log(car == `subaru`)

console.log("is car != `honda city`? predict true")
console.log(car != `honda city`)

console.log("is car == 'Subaru'? predict false")
console.log('car')

console.log("is car == 'SUBARU'? predict false")
console.log('car')

console.log("is car.length == 6? predict true")
console.log('car'.length == 6)

console.log("is car.length != 10? predict true")
console.log('car'.length != 10) 

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 72 <= 63 ? predict false")
console.log(72 <= 63)

console.log("is car == 'subaru' && car.length == 6? predict true ")
console.log('car'.length == 6)

Tasl:24

more conditionaltests: you't have to list the number of tests you creat to 10. If you want to try comparisons,
write more tests. Have at least one true and one false result for each of the following:

Test for equality and inequality with strings

let name_1 :string = "Salman"
let name_2 :string = "Salamn zada"
let name_3 :string = "Ibrahim"
if (name_1 == name_3)
      console.log("names are equal")

      console.log("names are not equal") 

       
      if (name_1 != name_2){
        console.log("names are equal")

       }

       if (name_1 != name_3){
       console.log("names are equal")

       }

       let age_1 : number = 18 
       let age_2l :  number = 22


       if (age_1 = 18) {
        console.log("eligible for vote")
       }

       if (age_1 = 22) {
        console.log("eligible for vote in older category")

    if (age_1 <= age_2){ // less
        console.log("younger")
    }
    if (age_2 <= age_1){ //greater
        console.log("order")
    }

    if (age_1 =  age_2 = 22) {
       console.log("person is eligibal for vote")
    }

    if (age_1 =  age_2 = 22) {
        console.log("person is eligibal not for vote")
    }

   let country : string [] = ["pakistan", "india", "japan", "china"]
    let (country.includes("pakistan")){
        console.log("pakistan is in country list")
    }
    if (!country.includes ("america"))(
       console.log ("america is not includes in an array")
    )
    mistake



    tasl:25

   let alien_color = "green"
    if (alien_color  == "green")

    console.log( "you earn 5 points")

    let alien_color : string = "red"
    if (alien_color == "green")
    console.log("no output")

    Task:26

    let alien_color = "green"

    if (alien_color  == "green") {
    console.log( "player just earned points for shooting the alien")
    } else{
       console.log("player just earned 10 points")
    }

    let alien_color = "red"

    if (alien_color  == "green") {
    console.log( "player just earned points for shooting the alien")
    } else{
       console.log("player just earned 10 points")
    }


Task27

let 'alien_color: string = "red";

if (alien_color == "green") {
  console.log("5 points")
} else if (alien_color == "yellow") {
  console.log("10 points") 
} else {
  console.log("15 points")
}

Task:28

let age: number = 100

if (age < 2) {
  console.log ("you are a baby")
}  else if (age < 4) {
  console.log(" you are a toddler") 
}
else if (age < 13) {
  console.log(" you are a kid") 
}
else if (age < 20) {
  console.log(" you are a teenager") 
}
else if (age < 65) {
  console.log(" you are a adult") 
} else {
  console.log("you are older")
} 

Task: 29 you really like bananas 

let favourite_fruits : string [] = ["kivi", "orange", "apples", "berry", "peach"]

if (favourite_fruits.includes("kivi")) {
  console.log("kivi")
}

if (favourite_fruits.includes("apple")) {
  console.log("apple")
}

if (favourite_fruits.includes("orange")) {
  console.log("orange") 
}

if (favourite_fruits.includes("berry")) {
  console.log("you really like bananas")
}

if (favourite_fruits.includes("peach")) {
  console.log("you really like bananas")
};

Task:30

let users : string [] = ["eric" , "haseeb", "ali", "hamza", "admin"]

for(let user of 'users') {
  if (user === "admin") { 
    console.log ("Hello admin, would you like to see a status report?")
  } else {
    console.log (` Hello $(user), thank you for logging in again`)
  }
}

Task:31

let users : string[]= ["eric", "haseeb", "ali", "hamza", "admin"]

if (users.length === 0){
  console.log ("we need to find some users!")
} else {
  for (let user of 'users'){
    if (user === "admin"){
      console.log("Hello admin, would you to see a status report?")
    } else {
      console.log ("Hello $(users), thank you for logging in again")
    }
}
}

let users = []
if ('users'.length === 0) {
  console.log ("we need to find some users!")
}

Task:32

let current_users : string [] = ["Admin", "Eric", "Ali", "Hamza", "Faisal"]
let new_users : string [] = ["admin", "faisal", "Fahad", "Asif", "Abid"]

let current_users_lower : string [] = current_user.map(user => user.toLowerCase()) 

for (let new_users of new_users)
  if (current_users_lower.includes (new_users.tolowerCase())) {
  console.log("sorry ${new_user}, that name is taken") 
  } else {
    console.log(`yes $(new_user), is still in avaliable list`)
  }
 
Task 33

let numbers : number [] =[1,2,3,4,5,6,7,8,9,]

for (let number of numbers) {  
if (number === 1) {
  console.log (`$(number)st`) //1st
} else if (number === 2) { 
  console.log (`$(number)nd`) //2nd
 
} else if (number === 3) { 
  console.log (`$(number)rd`) //3rd
} else {
  console.log (`(number)th`) //4th 5th, 6th, 7th, 8th, 9th
} 
}


Task:34

let favourite_pizza : string [] = ["papperoni", "chicken", "veg"]
for (let pizza of favourite_pizza) {
console.log(pizza)
}

console.log("\n")

for(let pizza of favourite_pizza) {
  console.log(` i really like $(pizza) pizza!`)

}
console.log("\nI really love pizza")

Task:35

let animals : string [] = ["cat","lion","dog"]

for (let animal of animals){
  console.log (animal)
}
console.log ("\n")

for (let animal of animals){
  console.log ( `A (animals) has a tail`)
}

console.log ("\n all of these are great pets! but i love cats more")

Task:36

function makeShirt(size: string, text: string): void {
  console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt(`large`,'" i love typescript"')
makeShirt(`medium`,'"i need a big shirt"')

Task:37

function makeShirt(size: string = 'large', text: string = ` i love typescript`): void {
  console.log(`you have order a ${size}, shirt that says ${text}`) 
}
makeShirt();
makeShirt(`medium`)

makeShirt(`small`, `i need a big shirt to wear`)

Task:38

function describe_city(city: string, country: string = 'pakistan'): void{
  console.log(`$(city) is in $(country)`)
}

describe_city('karachi') // defult sentence
describe_city('france', 'europe')
describe_city('lahore', 'is in pakistan')

Task:39

function cityCoumtry(city: string, country: string): string {
  return `${city}, ${country}`
}

let c1 = cityCoumtry('lahore', 'pakistan')
let c2 = cityCoumtry('tokyo', 'japan')
let c3 = cityCoumtry('paris', 'france')

console.log(c1)
console.log(c2)
console.log(c3)

Task:40

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() +artist.slice(1),
    title: title.charAt(0).toUpperCase() +title.slice(1)
  }
  return dictionaries;
}

let album = makeAlbum("ali", "light")
console.log(album)

album = makeAlbum("hamza","red wave")
console.log(album)

album = makeAlbum("bilal","seenbreez")
console.log(album)

Task:41

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log (magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician: string[] = ["ali", "hamza","bilal"];
show_magicians(magician)

Task:42

function make_great(magicians: string[]): void {
  for (let i = 0; 1 < magicians.length; i++) {
    magicians[i] = magicians[i] + '  the great'
}
}

const magicians2: string[] = ["ali","hamza","bilal"];
make_great(magicians2)
show_magicians(magicians2)

Task:43

function make_great2(magicians: string[]): string[] {
  const greatmagicans: string[] = [];
  for (let 1 =0; 1 < magicians.length; 1++) {
    greatmagicans.push(magicians[1]+ ' the Great');
  }
  return greatmagicans;
}

const magician3: string[] = ["ali","hamza","bilal"];
const greatmagicans2: string[] = make_great2(magician3);
show_magicians(magician3);
show_magicians(greatmagicans2);

Task:44

function sandwich(...items: string[]): void {
  console.log("sandwich order:")
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items}[i]}`)
  }
}

console.log("enjoy your sandwich farman")

sandwich('capsicum' , 'tomato' , 'chicken')
sandwich('beef' , 'cheese')
sandwich('garlic chicken', 'mayo sause')


Task:45

type car = {
  manufacture: string
  model: string
  [key: string]: any;
}

function creatcar(manufacture: string,model: string, optional: Record<string, any>): car {
  return{
    manufacture,
    model,
    ...optional
  }
}

const mycar: car = creatcar("toyota","corolla", {color: "silver", year: "2024"})
console.log(mycar) ;

