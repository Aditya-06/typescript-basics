// TS automatically detects array of strings
const cars = ['Ford', 'toyota', 'Chevy']

// 2-D arrays also detected by TS
const carByMaker = [
    ['f150'],
    ['innova'],
    ['camaro']
]

// TS will also know when we pop / access values from the array
const car = carByMaker[1]
const toyotaCar = carByMaker[1][0]
const trucker = cars.pop()  

// TS also helps with map and other array methods -> automatically detects type 
carByMaker[0].map((maker): string => {
    return maker.toUpperCase()
})

// Flexible arrays

// TS interprets this as an "OR" type -> Date | string
const impDates = [new Date(), "Today"]

// We can annotate multiple types -> we can now push strings OR numbers to the array
const datesImp: (string | number)[] = []
datesImp.push("Hello")
datesImp.push(234)

