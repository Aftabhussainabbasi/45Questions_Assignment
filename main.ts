//Exercise 1: Personal Hello World.
console.log ("\n Exercise 1: Hello World.");
console.log("hello world");

// Exercise 2: Personal Message.
console.log ("\n Exercise 2: Personal Message.");
let personName: string = "JohnWick"
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Exercise 3: Name Cases
console.log ("\n Exercise 3: Name Cases ");
//Lower case:
let personName1: string ="John Wick";
console.log("lowercase:", personName1.toLowerCase());
//Upper case 
console.log("uppercase:", personName1.toLocaleUpperCase());
//title case
console.log("titlecase:", personName1.replace(/\bw/g, c => c.toUpperCase()));

// Exercise 4: Famous Quote
 console.log("\n Exercise 4:  Famous Quote");
let quote: string= "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// Exercise 5: Famous Quote 2
console.log("\n Exercise 5:Famous Quote 2 ");
let quote1: string= "A person who never made a mistake never tried anything new.";
let author1: string= "Albert Einstein";
let famous_person: string= author1;
let message= `${famous_person} once said, ${quote1}`;
console.log(message);

// Exercise 6: Stripping Names
console.log("\n Exercise 6: Stripping Names");
let personName2: string = `\n\t AFTAB HUSSAIN \t\n`;
console.log(personName2);
let stripping: string = personName2.trim();
console.log(stripping);

// Exercise 7 and 8: Number Eight
console.log("\n Exercise 7 and  8: Number Eight");
console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 / 2);

// Exercise 9: Favorite Number
console.log("\n Exercise 9: Favorite Number");
let favouriteNumber: number = 9;
console.log(`My favourite number is ${favouriteNumber}`);

// Exercise 10: Adding Comments
console.log("\n Exercise 10: Adding Comments");
// Program by Aftab Hussain
// Date: 20/02/2024
// This program performs basic arithmetic operations and prints the results.
console.log(5 + 3); // Addition:
console.log(10 - 2); // Subtraction:
console.log(4 * 2); // Multiplication:
console.log(16 / 2); // Division:

// Exercise 11: Names
console.log("\n Exercise 11: Names");
let members: string[] = ["Aftab" , "Jhon" , "Adnan" , "Bilal" ];
for(let i=0; i<members.length; i++) {
    console.log(members[i]);
}

// Exercise 12: Greetings
console.log("\n Exercise 12: Greetings") ;
let members1: string[] = ["Aftab" , "Jhon" , "Adnan" , "Bilal" ];
let message1: string= "we are doing 1st Assignment of AI course: ";
for(let i=0; i<members1.length; i++) {
    console.log(message1 + members1[i]);
}

// Exercise 13: Your Own Array
console.log ("\n Exercise 13: Your Own Array");
let transportation : string [] =  ["Car", "Bus", "Train" , "Bike" , "JF 17 Thunder"];
for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a  " + transportation[i] + ".");
}

// Exercise 14: Guest List
console.log("\n Exercise 14: Guest List");
let guestList = [ "Governor Sir:Kamran Tessori" , "Adnan", "M.Umar", "Bilal" , "Hanan"];
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. I would be honored to have your company.\nSincerely,\nAftab Hussain\n");
}

// Exercise 15: Changing Guest List
console.log("\n Exercise 15: Changing Guest List");
let guestList1 = [ "Governor Sir:Kamran Tessori" , "Adnan", "M.Umar", "Bilal" , "Hanan"];
for (let i = 0; i < guestList1.length; i++) {
    console.log("Dear " + guestList1[i] + ",\nYou are cordially invited to dinner at my place. I would be honored to have your company.\nSincerely,\nAftab Hussain\n");
}
let not_present1 : string = "Hanan";
let new_guest1 : string = "Imran ";
guestList1[4] = new_guest1;
for (let i = 0; i < guestList1.length; i++) {
    console.log("Dear " + guestList1[i] + ",\nYou are cordially invited to dinner at my place. I would be honored to have your company.\nSincerely,\nAftab Hussain\n");
}
console.log (`Mr. ${not_present1} is not coming for Dinner today `);

// Exercise 16: More Guests
console.log("\n Exercise 16: More Guests");
let guestList2 = [ "Governor Sir:Kamran Tessori" , "Adnan", "M.Umar", "Bilal" , "Hanan"];
let not_present2 : string = "Hanan";
let new_guest2 : string = "Imran ";
guestList2[4] = new_guest2;
for (let i = 0; i < guestList2.length; i++) {
    console.log("Dear " + guestList2[i] + ",\nYou are cordially invited to dinner at my place. I would be honored to have your company.\nSincerely,\nAftab Hussain\n");
}
guestList2.unshift("Shahwez", "Usama", "Umair");
for (let i = 0; i < guestList2.length; i++) {
    console.log("Dear " + guestList2[i] + ",\njust found a bigger dinner table,.\nSincerely,\nAftab Hussain\n");
}

// Exercise 17: Shrinking Guest List
console.log("\n Exercise 17: Shrinking Guest List");
let guestList3: string[] = ["Governor Sir: Kamran Tessori", "Adnan", "M.Umar", "Bilal", "Hanan"];
let not_present: string = "Hanan";
let new_guest: string = "Imran";
guestList3[4] = new_guest;

guestList3.unshift("Shahwez", "Usama", "Umair");
console.log("\nUnfortunately just found out that new dinner table won’t arrive in time for the dinner, and we have space for only two guests.\n");
console.log("Due to circumstances, we can only invite two guests for dinner.\n");
while (guestList3.length > 2) {
    let remove_guest: string | undefined = guestList3.pop();
    if (remove_guest) {
        console.log(`I'm really sorry, ${remove_guest}, but we can't invite you to dinner.`);
    }
}
console.log("\nInvitations:");
for (let guest of guestList3) {
    console.log(`Dear ${guest}, you are still invited for dinner.`);
}
guestList3.splice(0, 2);
if (guestList3.length === 0) {
    console.log("\nThe guest list is now empty.");
} else {
    console.log("\nError: The guest list is not empty.");
}

// Exercise 18: Seeing the World
console.log("\n Exercise 18: Seeing the World");
let placesToVisit: string[] = ["Saudia Arab", "Qatar", "Japan", "Russia", "Indonesia"];
console.log("Original Order:", placesToVisit.join(",\n "));
console.log("Alphabetical Order:", placesToVisit.slice().sort().join(",\n "));
console.log("Original Order:", placesToVisit.join(",\n "));
console.log("Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse().join(",\n "));
console.log("Original Order:", placesToVisit.join(",\n "));
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit.join(",\n "));
placesToVisit.reverse();
console.log("Original Order:", placesToVisit.join(",\n "));
console.log("Sorted Alphabetical Order:", placesToVisit.slice().sort().join(",\n "));
console.log("Sorted Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse().join(",\n "));

// Exercise 19: Dinner Guests
console.log("\n Exercise 19: Dinner Guests");
console.log(`We are inviting ${guestList1.length} people to dinner.`);

// Exercise 20: Array of Items
console.log("\n Exercise 20: Array of Items");
let mountains: string[] = ["Everest", "K2", "Kangchenjunga"];
console.log("Mountains:", mountains);
let cities: string[] = ["Karachi", "Islamabad", "Hyderabad"];
console.log("Cities:", cities);
let rivers: string[] = ["River Indus", "Chenab", "Ravi"];
console.log("Rivers:", rivers);

// Exercise 21: TypeScript Object
console.log("\n Exercise 21: TypeScript Object");
let city: { name: string; country: string } = { name: "Karachi", country: "Pakistan" };
console.log("City:", city);

// Exercise 22: Intentional Error
console.log("Exercise 22: Intentional Error");
const languages: string[] = ["C++", "Java", "TypeScript"];
console.log(languages[3]); // This intentionally causes an error cus array start from Zero

// Exercise 23: Conditional Tests
console.log("\n Exercise 23: Conditional Tests");
let car: string = 'subaru';
console.log("Is car == 'subaru'? True.");
console.log(car === 'subaru');
// True statements
console.log("Is car == 'subaru'? True.");
console.log(car === 'subaru');
console.log("Is car !== 'honda'? True.");
console.log(car !== 'honda');
console.log("Is car.startsWith('sub')? True.");
console.log(car.startsWith('sub'));
console.log("Is car.length > 0? True.");
console.log(car.length > 0);
console.log("Is car.charAt(0) === 's'? True.");
console.log(car.charAt(0) === 's');
// False statements
console.log("Is car == 'ford'? False.");
console.log(car === 'ford');
console.log("Is car !== 'subaru'? False.");
console.log(car !== 'subaru');
console.log("Is car.startsWith('ford')? False.");
console.log(car.startsWith('ford'));
console.log("Is car.length < 5? False.");
console.log(car.length < 5);
console.log("Is car.charAt(1) !== 'u'? False.");
console.log(car.charAt(1) !== 'u');

// Exercise 24:More Conditional Tests
console.log("Exercise 24:More Conditional Tests");
// Tests for equality and inequality
console.log("'apple' === 'apple':", 'apple' === 'apple'); // True
console.log("'apple' !== 'orange':", "'apple' !== 'orange'"); // True
// Tests using the lower case function
console.log("'HELLO'.toLowerCase() === 'hello':", 'HELLO'.toLowerCase() === 'hello'); // True
// Numerical tests
console.log("5 > 3:", 5 > 3); // True
console.log("5 < 3:", 5 < 3); // False
// Test "and" and "or" operators
console.log("(5 > 3) && (10 < 20):", (5 > 3) && (10 < 20)); // True
console.log("(5 < 3) || (10 < 20):", (5 < 3) || (10 < 20)); // True
// Test whether an item is in an array
let fruits = ['apple', 'orange', 'banana'];
console.log("'apple' is in fruits:", fruits.includes('apple')); // True
// Test whether an item is not in an array
console.log("'grape' is not in fruits:", !fruits.includes('grape')); // True

// Exercise 25: Alien Colors #1
console.log("\n Exercise 25: Alien Colors #1");
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}

// Exercise 26: Alien Colors #2
console.log("\n Exercise 26: Alien Colors #2");
if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
} else {
    console.log('The player just earned 10 points. color');
}
if (alien_color !== 'green') {
    console.log('The player just earned 10 points..');
} else {
    console.log('The player just earned 10 points.color is not green');
}
let alien_color1: string = 'red'; // Set alien_color to 'red' to run the else block
if (alien_color1 === 'red') {
    console.log('The player just earned 5 points for shooting the alien. color is red');
} else {
    console.log('The player just earned 10 points.');
}

// Exercise 27: Alien Colors #3
console.log('\nExercise 27: Alien Colors #3');
if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}
// Alien Colors #3 - Version 1 (Green Alien - 5 points)
console.log("\n Alien Color Green- 5 points)");
// let alien_color: string = 'green'; Green alien already defined above
if (alien_color === 'green') {
    console.log('The player earned 5 points for shooting the green alien.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points for shooting the yellow alien.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points for shooting the red alien.');
} else {
    console.log('Unknown alien color.');
}
// Alien Color Yellow - 10 points)
console.log("\n Alien Color Yellow- 10 points)");
alien_color = 'yellow'; // Yellow alien
if (alien_color === 'green') {
    console.log('The player earned 5 points for shooting the green alien.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points for shooting the yellow alien.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points for shooting the red alien.');
} else {
    console.log('Unknown alien color.');
}
// Alien Color Red - 15 points)
console.log("\n Alien Color Red- 15 points)");
alien_color = 'red'; // Red alien
if (alien_color === 'green') {
    console.log('The player earned 5 points for shooting the green alien.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points for shooting the yellow alien.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points for shooting the red alien.');
} else {
    console.log('Unknown alien color.');
}

// Exercise 28: Stages of Life
console.log("\n Exercise 28: Stages of Life");
let age: number = 2;
if (age < 2) {
    console.log('The person is a baby.');
} else if (age < 4) {
    console.log('The person is a toddler.');
} else if (age < 13) {
    console.log('The person is a kid.');
} else if (age < 20) {
    console.log('The person is a teenager.');
} else if (age < 65) {
    console.log('The person is an adult.');
} else {
    console.log('The person is an elder.');
}

// Exercise 29: Favorite Fruit
console.log('\n Exercise 29: Favorite Fruit');
let favorite_fruits: string[] = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('banana')) {
    console.log('You like bananas!');
}
if (favorite_fruits.includes('apple')) {
    console.log('You like apples!');
}
if (favorite_fruits.includes('orange')) {
    console.log('You like oranges!');
}
if (favorite_fruits.includes('grapes')) {
    console.log('You like oranges!');
}
if (favorite_fruits.includes('mango')) {
    console.log('You like oranges!');
}
/* // Also achived by if else statement 
const favorite_fruits1: string[] = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('banana')) {
    console.log('You like bananas!');
} else if (favorite_fruits1.includes('apple')) {
    console.log('You like apples!');
} else if (favorite_fruits1.includes('orange')) {
    console.log('You like orange!');
}*/

// Exercise 30: Hello Admin
console.log('\n Exercise 30: Hello Admin');
const usernames: string[] = ['admin', 'Eric', 'Aftab', 'Adnan', 'Usama'];
usernames.forEach(username => {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}
});

// Exercise 31: No Users
console.log('\n Exercise 31: No Users');
let users: string[] = ['Aftab', 'Usama', 'Jhon wick'];
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Removing all usernames from the array
    users = [];
    console.log("All users have been removed.");
}

// Exercise 32: Checking Usernames
console.log('\n Exercise 32: Checking Usernames');
const current_users: string[] = ['Aftab', 'Usama', 'Admin', 'Jhon wick', 'Guest'];
const new_users: string[] = ['Adnan', 'Saleem', 'Admin', 'Jhon wick', 'Mary jane'];

new_users.forEach(user => {
    if (current_users.map(username => username.toLowerCase()).includes(user.toLowerCase())) {
        console.log(`Sorry, ${user} is already taken. Please choose a different username.`);
    } else {
        console.log(`${user} is available.`);
    }
});

// Exercise 33: Ordinal Numbers
console.log("\n Exercise 33: Ordinal Numbers");
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix: string;
    if (number === 1) {
        suffix = 'st';
    } else if (number === 2) {
        suffix = 'nd';
    } else if (number === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
    console.log(`${number}${suffix}`);
});

// Exercise 34: Pizzas
console.log("\n Exercise 34: Pizzas");
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Chicken Fajita"];
favoritePizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
console.log("I really love pizza!");

// Exercise 35: Animals
console.log("\n Exercise 35: Animals");
const animals: string[] = ["Dog", "Cat", "Horse"];
animals.forEach(animal => console.log(`A ${animal.toLowerCase()} would make a great pet.`));
console.log("Any of these animals would make a great pet! and they are loyal. ");

// Exercise 36: T-Shirt
console.log("\n Exercise 36: T-Shirt");
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt(); // Large shirt with default message
make_shirt("medium" ); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Small shirt with custom message

// Exercise 37: Large Shirts
console.log("\n Exercise 37: Large Shirts");
make_shirt("Large" , "Any fool can write code that a computer can understand.\nGood programmers write code that humans can understand.” – Martin Fowler"); // Large shirt with custom message
make_shirt("medium" ); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Small shirt with custom message

// Exercise 38: Cities
console.log("\n Exercise 38: Cities");
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", );
describe_city("Paris", "USA");
describe_city("Tokyo", "Japan");

// Exercise 39: City Names
console.log("\n Exercise 39: City Names");
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Kabul", "Afghanistan"));
console.log(city_country("Mumbai", "India"));

// Exercise 40: Album
console.log("\n Exercise 40: Album");
function make_album(artist: string, title: string, tracks?: number): object {
    const album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Peter Gabriel", "Passion", 24)); //https://en.wikipedia.org/wiki/Passion_(Peter_Gabriel_album)
console.log(make_album("Rahat Fateh", "Tasveer", 4)); //https://music.apple.com/us/album/tasveer-vol-11/379664309
console.log(make_album("Artist3", "Title3", 10));

// Exercise 41: Magicians
console.log("\n Exercise 41: Magicians");
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

show_magicians(["David Copperfield", "David Blaine", "Harry Houdini"]);

// Exercise 42: Great Magicians
console.log("\n Exercise 42: Great Magicians");
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}
const magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
const great_magicians: string[] = make_great(magicians);
show_magicians(great_magicians);

// Exercise 43: Unchanged Magicians
console.log("\n Exercise 43: Unchanged Magicians");
const original_magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
const modified_magicians: string[] = make_great(original_magicians.slice());
console.log("Original Magicians:");
show_magicians(original_magicians);
console.log("\nModified Magicians:");
show_magicians(modified_magicians);

// Exercise 44: Sandwiches
console.log("\n Exercise 44: Sandwiches");
function make_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with:");
    items.forEach(item => console.log(`- ${item}`));
}
make_sandwich("jam", "cheese", "lettuce");
make_sandwich("chicken", "bacon", "tomato", "mayo");
make_sandwich("peanut butter", "jelly");

// Exercise 45: Cars
console.log("\n Exercise 45: Cars");
function car_info(manufacturer: string, model: string, ...options: string[]): object {
    let car: { manufacturer: string; model: string; [key: string]: string } = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(option => {
        const [key, value] = option.split(":");
        car[key] = value;
    });
    return car;
}

console.log(car_info("Toyota", "Supra", "color:silver", "year:2019"));
console.log(car_info("Toyota", "Camry", "color:black", "year:2022"));
console.log(car_info("Honda", "Civic Sedan", "color:silver", "year:2024"));

console.log("1st Assignment of 45 questions completed. My name is Aftab Hussain, and I have successfully completed the AI course initiative by Governor's first Assignment.");
