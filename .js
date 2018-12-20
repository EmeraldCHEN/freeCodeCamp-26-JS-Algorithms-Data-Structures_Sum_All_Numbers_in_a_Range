function sumAll(arr) {
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
console.log(sumAll([1, 4])); // 1+2+3+4=10
console.log(sumAll([4, 1])); // 4+3+2+1=10





// Retrieved from
