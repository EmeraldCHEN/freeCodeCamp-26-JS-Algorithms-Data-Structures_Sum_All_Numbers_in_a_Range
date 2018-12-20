function sumAll(arr) {
    var num;
    var sum = arr[1];

    if(arr[0] < arr[1]){
        num = arr[1] - 1;   
 
        while(num!=arr[0]){
            sum +=  num;
            num--; 
        }
        return sum + arr[0];
    }else{
        num = arr[0] - 1;
        while(num != arr[1]){
            sum +=  num;
            num--; 
        }
        return sum + arr[0];
    }      
}

console.log(sumAll([4, 1])); // 4+3+2+1=10

console.log(sumAll([1, 4])); // 1+2+3+4=10



// Retrieved from
