const descendingSort = (arr) => {
    return arr.sort((a, b) => b - a);
};

// Example usage:
const inputArray = [5, 2, 9, 1, 5, 6];
const sortedArray = descendingSort(inputArray);
console.log(sortedArray); // Output: [9, 6, 5, 5, 2, 1]
