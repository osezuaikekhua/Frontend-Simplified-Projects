/** Bubble Sort **
 * 
 * Sort the 'nums' array using bubble sort.
 *  
 * @example
 * bubbleSort([3, 2, 1]) -> [1, 2, 3]
 * bubbleSort([0, 12, 8]) -> [0, 8, 12]
 * bubbleSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

const BubbleSort = (arr) => {

    for(let i = 1; i < arr.length; i++){
//            left: 9      right: 5
        while(arr[i - 1] > arr[i]){ //While the number to the left is greater, keep swapping
            
                let temp = arr[i] //saving the value 
                arr[i] = arr[i -1] //since u cant litterally switch them we changed their values to the other one
                arr[i - 1] = temp // since the value was changed i use the stored value
                i-= 1
            
        }
    }
    return arr
}

 console.log(BubbleSort([9,5,2,7,8]))


class Car {
    constructor(brand, year){
        this.brand = brand
        this. year = year
    }

    getAge(currentYear) {
        return currentYear - this.year
    }
    print(){
        console.log(`This ${this.brand} is ${this.getAge(2023)} years old`)
    }
}

const MercadesCar = new Car('Mercades', 2013)
const ChevronCar = new Car('Chevron', 2015)
const PorsheCar = new Car('Porshe', 2020)

console.log(MercadesCar.print())
console.log(ChevronCar.print())
console.log(PorsheCar.print())