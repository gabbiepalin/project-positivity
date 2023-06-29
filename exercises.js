let userName = "Gabbie";
let age = 25;
console.log('my name is', userName + ' my age is', age);

if (age > 25){
    console.log('you are older');
}
 else {
    console.log('you are young');
}

let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
console.log('this is a', fruits[4]);

let movies = ['harry potter', 'lord of the Rings', 'white chicks', 'tangled'];
console.log('my favourite movie is', movies[1]);

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log('[0],[1],[2],[3],[4],[5]');
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(10);
console.log(numbers);

console.log(10+6);
console.log(numbers[0]+numbers[5]);
console.log(numbers[0] + numbers[5] + numbers[1])
fruits.push('pineapple');

for(let i = 0; i < fruits.length; i++) {
    console.log('Loop', fruits[i]+ i);
}

console.log(fruits.length);

let animals = ['dog', 'cat', 'elephant', 'lion'];
console.log(animals.length)

for(let i = 0; i < animals.length; i++) {
    console.log('For ', animals[i]+ i); 
}

function sum(a, b) {
    console.log(a + b)
}
sum(10, 6)

const myText = "the weather is cold";
const newstring = myText.replace("cold", "warm");
console.log(newstring);

function favouriteAnimal(boat, animal){
    return boat + " " + animal + " is my favorite animal!"
    
}
console.log(favouriteAnimal('jetboat', 'elephant'));

function showMessage(){
    console.log( 'Hello everyone!' );
}
showMessage();
showMessage();

let sayHi = () => console.log("Hello");

sayHi();

const readline = require ('readline') .createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question ('Whats your age?', age => {
    console.log ("You are " + age + " years old!");
    readline.close();
});

// let welcome = (age < 18) ? 
    // () => console.log('Hello!'):
    // () => console.log("Greetings!");

// welcome();