//let array1 = [1, 0, 1, 1, 0];
let array1Fun = function(){
    array1 = (prompt('Enter binary int a:')).split('');
    for(element in array1){
        array1[element] = Number(array1[element]);
        if(array1[element] != 0 && array1[element] != 1){
            alert('Must be binary number, enter again...');
            array1Fun();
        }
    }
    return(array1);
}
//let array2 = [1, 0, 1, 1, 1];
let array2Fun = function(){
    let array2 = (prompt('Enter binary int b:')).split('');
    for(element in array2){
        array2[element] = Number(array2[element]);
        if(array2[element] != 0 && array2[element] != 1){
            alert('Must be binary number, enter again...');
            array2Fun();
        }
    }
    return(array2);
}

function addBinaryIntegers(arrA, arrB, n){
    let array3 = [];
    let carry = 0;
    for(i=n;i>0;i--){
        let sum = arrA[i-1] + arrB[i-1] + carry;
        if (sum >=2){
            carry = 1;
            if(sum % 2 != 0){
                array3[i] = 1;
            }
            else{
                array3[i] = 0;
            }
        }
        else{
            if(Number(sum == 1)){
                array3[i] = 1;
                if(carry == 1) carry = 0;
            }
            else{
                array3[i] = 0;
            }
        }
    }
    array3[0] = carry;
    console.log(array3);
    alert(array3.join(''));
    location.reload();
}
let arr1 = array1Fun();
let arr2 = array2Fun();

addBinaryIntegers(arr1, arr2, Math.max(arr1.length, arr2.length));