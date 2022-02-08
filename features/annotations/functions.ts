// return type must be a number -> TS can figure it out itself (:number before arrow is unnecessary)
const add = (a: number, b: number): number => {
    return a+b
}

function divide(a: number, b:number): number {
    return a / b
}

// works for anon funcs as well
const multiply = function (a: number, b: number): number {
    return a * b
}

// When we throw an error, the function does not return anything -> therefore we use never
// if possibility of an error, no need to mention never in annotation
const throwError = (message: string): string => {
    if (!message)
        throw new Error(message)
    return message
}

// Destructuring objects
const forcast = {
    date: new Date(),
    weather: "sunny"
}

// destructuring seperate from annotation
const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}