const numArr = [5, 3, 2, 4, 1];
const n = numArr.length;
function selectionSort(A, n){
    for(let i = 0; i < n - 1; i++){
        let smallest = i;
        for(let x = i + 1; x < n; x++){
            if(A[x] < A[smallest]){
                smallest = x;
            }
        }
        let temp = A[i];
        A[i] = A[smallest];
        A[smallest] = temp;
    }
    console.log(A)
}
selectionSort(numArr, n);