/* 
Função Swap: componente fundamental para reorganizar 
elementos em um vetor de acordo com um determinado 
critério, como a ordenação em ordem crescente ou 
decrescente.

Criada para ser utilizada nas funções abaixo
*/
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

//Função para misturar os elementos em um array
const shuffle = (array, numberOfSwaps) => {
  for (let i = 0; i < numberOfSwaps; i++) {
    const index1 = Math.floor(Math.random() * array.length);
    const index2 = Math.floor(Math.random() * array.length);
    swap(array, index1, index2);
  }
};

/* Funções para seleção de ordenação */
//Com Bubble Sort
const bubble_sort = (array) => {
  const n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
};
//Com Selection Sort
const selection_sort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
};
//Com Quick Sort
const quick_sort = (array, low, high) => {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quick_sort(array, low, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, high);
  }
};
//Função de apoio ao Quick Sort para fazer o particionamento
const partition = (array, low, high) => {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
};
