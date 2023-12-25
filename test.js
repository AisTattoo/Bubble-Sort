
function clickThis() {
  alert("Pergi ke Inspect lalu tekan console untuk melihat Bubble Sort");
}


function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  let arraySebelumDisortir = [43, 34, 25, 12, 22, 4, 88, 54, 28, 87];
  console.log("Array sebelum pengurutan: " + arraySebelumDisortir);
  let arraySetelahDisortir = bubbleSort(arraySebelumDisortir);
  console.log("Array setelah pengurutan: " + arraySetelahDisortir);
  