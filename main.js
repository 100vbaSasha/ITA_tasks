// 1) Знайти кількість і сумму членів послідовності, які ділятья на 5 і не діляться на 7

function task1(arr) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 5 === 0 & arr[i] % 7 !== 0) {
            count++;
            sum += arr[i];
        }
    }
    console.log(`Suma of ${count} numbers = ${sum}`);
    return sum;
}

const task1Array = [5, 35, 21, 56, 75, 70, 45, 32, 90, 105, 10, 14];
//5, 75, 45, 90, 10
//task1(task1Array);



/////////////////////////////////////////////////////////////////////////////////////////////////////
// 2) Дано 2 масива унікальних цілих чисел. Знайти їх перетин

function task2(arr1, arr2) {
    let arr = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }
    return arr;
}

const task2Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const task2Array2 = [-3, -2, -1, 0, 4, 6, 8, 10, 14, 18, 19, 20, 22, 25, 26, 29, 31, 35];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const testArray3 = [-1, 0, 26];
// [4, 6, 8, 10, 14, 18, 19, 20, 22, 25]
console.log(task2(array, testArray3));


/////////////////////////////////////////////////////////////////////////////////////////////////////
// 3) Знайти палідром чисел, які при піднесені до степеня також дають паліндром.

function palindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

function task3() {
    let arr = [];
    for(let i = 0; i < 100; i++) {
        if(palindrome(i) && palindrome(i*i)) {
            arr.push(i);
        }
    }
    return arr;
}

//[ 0, 1, 2, 3, 11, 22 ]
//[ 0, 1, 4, 9, 121, 484 ]
//console.log(task3());


module.exports = { 
    task1,
    task2,
    task3
}