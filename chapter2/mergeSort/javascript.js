const arr = [5, 23, 40, 2, 9, 6, 27, 87];

function MergeSort(A){
    let n = A.length;
    let Separate = function(A, p, r){
        if(p==r){
            return;
        }
        let q = Math.floor((p+r)/2);
        Separate(A, p, q);
        Separate(A, (q+1), r);
        Merge(A, p, q, r);
    }
    let Merge = function(A, p, q, r){
        let nl = q-p+1;
        let nr = r-q;
        let L = new Array(nl);
        let R = new Array(nr);
        for(let i = 0; i<=nl-1;i++){
            L[i] = A[p+i];
        }
        for(let j = 0; j<=nr-1;j++){
            R[j] = A[q+j+1];
        }
        let i=0;
        let j=0;
        let k=p;
        while(i<nl&&j<nr){
            if(L[i] <= R[j]){
                A[k] = L[i];
                i++;
            }else{
                A[k] = R[j];
                j++;
            }
            k++;
        }
        while(i<nl){
            A[k] = L[i];
            i++;
            k++;
        }
        while(j<nr){
            A[k] = R[j];
            j++;
            k++;
        }
    }
    Separate(A, 0, n-1);
    console.log(`Sorted array: ${A}`);
}
MergeSort(arr);