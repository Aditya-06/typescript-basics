const oldCivic = {
    name: 'Civic',
    year: 1996,
    broken: false,
    summary(): string {
        return `
        Name: ${this.name}
        Year: ${this.year}
        Broken?: ${this.broken}
        `
    }
}   

// This is very long -> will get complicated if we plan on expanding the features, use more function XX
const printVehicle = (vehicle: { name: string; year: number, broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`) 
    console.log(`Broken?: ${vehicle.broken}`)   
}

// To fix this dupliaction -> Create Interface
// This just specifies necessary properties -> additional props can be present
interface Vehicle {
    name: string,
    broken: boolean
    year: number,
    // this tells the compiler that any object with type Vehicle need to have a method of summary which returns a string
    // also no params are allowed
    summary(): string
}

// We can directly use vehicle now
const printcar = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`) 
    console.log(`Broken?: ${vehicle.broken}`)   
}

// This will also check if the object created meets the specifications of the interface
printcar(oldCivic)