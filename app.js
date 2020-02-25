var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
let modifiedfoods = foods.slice(1, 4);
console.log(modifiedfoods);

foods.splice(2, 0, "icecream", "fingerchips");
console.log(foods);


const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let evennum = numberArray.filter(ele => ele%2==0) 
console.log(evennum);


//filter
function isPrime(numberArray) {
    prime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++)
         {
            if (number % i === 0) 
            return false;
        }
        return true;
    });

    console.log(prime);
}


isPrime(numberArray);




//  Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    var map = myArray.map(element => element * element);
    return map;
}
console.log(findSquareOfNumbers(myArray));







// Reduce
function multiply(map)
{
let Reduce = map.reduce((i, element) => i + element );
    console.log(Reduce);
}
multiply(findSquareOfNumbers(myArray));
