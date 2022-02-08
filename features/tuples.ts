const drink = {
    colour: "brown",
    carbonated: true,
    super: 20
}

// TS recognizes this as an arrry of 3 types, 
// but the order does not matter. The types can be swapped an played around with
const pepsi = ['brown', true, 40]

// if we want to preserve the ordering, ie string, boolean, number -> Use Tuple
// here, if we write boolean before string, the TS compiler will throw an error
const pepTuple: [string, boolean, number] = ['brown', true, 50]

// If we want to create many such arrays, we can use a type alias instead of repeating
// this mimics a type
type Drink = [string, boolean, number];
const coke: Drink = ['Cocaina', false, 432]
