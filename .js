
/********  Solution #1   *******************************************************************************/

function sumAll1(arr) {
    if(arr[0] < arr[1]){
        let sum = arr[1];
        let num = arr[1] - 1;   
        while(num >= arr[0]){
            sum +=  num;
            num--; 
        }
        return sum;
    }else{
        let sum = arr[0];
        let num = arr[0] - 1;
        while(num >= arr[1]){
            sum +=  num;
            num--; 
        }
        return sum;
    }      
}
console.log(sumAll1([1, 4])); // 1+2+3+4=10
console.log(sumAll1([4, 1])); // 4+3+2+1=10



/********  Solution #2   *******************************************************************************/

function sumAll2(arr) {
    let max = Math.max(...arr);
    let min = Math.min(arr[0], arr[1]);
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }   
    return sum;
}



/********  Solution #3   *******************************************************************************/

function sumAll3(arr) {
    arr.sort((x1,x2) => x1 - x2);  // Using ES6 arrow function to sort numbers in arr from smallest to largest in one single line

    let min = arr[0];
    let max = arr[1];

    let sum = (max - min + 1) * (min + max) / 2;   // Using Arithmetic Progression summing formula
    return sum;
}




// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/
