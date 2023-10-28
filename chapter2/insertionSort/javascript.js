const initialArr = [5, 2, 4, 6, 1, 3];
function main(arr) {
    const initialContainer = document.querySelector('.initial');
    const button = document.querySelector('.button');
    const n = arr.length;
    initialContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for(item in arr){
        let initialItem = document.createElement('div');
        initialItem.className = 'initialItem';
        initialItem.textContent = arr[item];
        initialContainer.appendChild(initialItem);
    }
    const sortedContainer = document.querySelector('.sorted');
    sortedContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    button.addEventListener('click', () => {
        button.style.visibility = 'hidden';
        let key;
        let j;
        for(let i = 1; i < n; i++){
            key = arr[i];
            //Insert initialArr[i] into the sorted subarray
            j = i-1;
            while(j >= 0 && arr[j] > key){
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }
        console.log(arr);
        for(item in arr){
            let initialItem = document.createElement('div');
            initialItem.className = 'initialItem';
            initialItem.textContent = arr[item];
            sortedContainer.appendChild(initialItem);
        }
    });
}
main(initialArr);