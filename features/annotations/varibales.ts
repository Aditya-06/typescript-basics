// can't assign anything other than number
// Type Annotation
const apples: number = 4

// TS will consider this type as a number as well -> Type Inference
// This only works if declaration and assignmnet is done on the same line
const mangoes = 4

// variable Orange has type 'any' -> because value not assigned at the time of declaration
let orange
orange = 23;

// ??
let nothing: null = undefined

// for more complex types
const colors: string[] = ["hello", "ejll"]

// Classes
class Car {
// something
}

let car: Car = new Car()

// Object Literal -> {property: type}
let point: { x: number;  y: number} = {
    x: 10,
    y: 20
}

// functions -> What are the types of args and return values??? (function param: type) => return type
const logNumber: (i: number) => void = (i:number) => {
    console.log(i)
}

// When to use annotations?


// 1. Function that returns 'any' type

const json = '{"x": 10, "y": 20}'
// JSON.parse returns 'any' type ('false' -> bolean) ('1' -> number) ("{'value': 324}" -> returns {value: number})
// TS can't guess return type -> Therefore 'any' type is used
// Therefore providing annotations is imp in these cases where a function may return 'any' type
const coordinates: { x: number; y: number} = JSON.parse(json)
console.log(coordinates)

// 2. Decalre on one line and assign on another

let words = ['red', 'green', 'blue'];
// here, no value is assigned to foundWord initially
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// 3. TS can't infer the type directly
let numbers = [-92, 3, - 29]
// false -> if not found, else the number itself
// this annotation means that variable can be either boolean or number
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}