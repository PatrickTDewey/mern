const arr1 = [1, 1, 1, 2, 11, 7, 14]

const twoSum = (arr, targetSum) => {
    let idxArr = []
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] + arr[j] === targetSum) {
                idxArr.push([i, j]);
            }
            j++;
        }
    }
    return idxArr;
}

function kMostFrequent(nums, k) {
    //use a set of KVPs - the key will be the number, the value will be the count
    let map = new Object
    let j = 0;
    let count = 0;
    let greatestVals = []
    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]])  map[nums[i]] = 0;
    }
    for (const key in map) {
        let j = 0
        if (Object.hasOwnProperty.call(map, key)) {
            while (j < nums.length) {
                if (nums[j] == key) {
                    map[key] += 1;
                }
                j++;
            }
        }
    }
    while(count < k) {
        let greatest = 0
        for (const key in map) {
            if (Object.hasOwnProperty.call(map, key)) {
                const element = map[key];
                if (element > greatest) {
                    greatest = key
                    greatestVals.push({greatest: key, times: element})
                    map[key] = 0;
                }
            }
        }
        count++;
    }
    return greatestVals;
}
console.log(kMostFrequent(arr1, 1))