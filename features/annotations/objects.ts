const profile = {
    name: "Aditya",
    age: 20,
    cords: {
        lat: 23972,
        lng: 23343
    },
    setAge(age: number): void {
        this.age = age
    }
}

// destructuring objects -> write it seperately
// annotate each property we want to use
const { age }: { age: number } = profile

const { cords: {lat, lng }}: {cords: {lat: number, lng: number}} = profile