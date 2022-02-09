// public    -> anyone can call
// private   -> only methods of the current class can call -> objects cannot call either
// protected -> only accessable by methods of class and subclasses -> objects cannot call

class Vehicle {

    // class fields
    // no need to write if in constructor
    // color: string = 'red'

    // use public to avoid initialization
    constructor(public color: string) {
        this.color = color
    }


    // Class method
    private drive(): void {
        console.log('Vroooooom')
    }

    honk(): void {
        console.log("Honk Honk")
        // calling inside the class itself is allowed
        this.drive()
    }
}

// class Car inherits Vehicle class
class Car extends Vehicle {

    // constructor in sub-class -> must call constructor of the parent using "super"
    constructor(public wheels: number, color: string) {
        super(color)
    }

    // overwrite the method
    // Since drive is private, TS will throw an error if we try to overwrite
    // drive(): void {
    //     console.log('BRrrrr')
    // }

    who(): void {
        console.log('I am a car!')
    }

}

const vehicle = new Vehicle('blue')
// Since we are calling drive outside the class, it'll throw an error
// vehicle.drive()

const f150 = new Car(6, 'orange')
// f150.drive()
f150.who()

