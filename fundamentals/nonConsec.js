const arr1 = [1, 2, 4, 5, 7, 8, 9]
const nonConsec = (sortedNums) => {
    let nonConsecs = [];
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if ((sortedNums[i] + 1) != sortedNums[i + 1]) {
            nonConsecs.push({ i: i + 1, n: sortedNums[i + 1] })
        }
    }
    return nonConsecs
}
// console.log(nonConsec(arr1))


// findConsqSums(nums1, sum1)
const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

function findConsqSums(nums, targetSum) {
    let results = []
    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        idx = i;
        while ((targetSum >= 0 && sum <= targetSum) || (targetSum < 0 && sum >= targetSum)) {
            sum += nums[idx];
            if (sum === targetSum) {
                results.push(nums.slice(i, idx + 1));
            }
            idx++;
        }
    }
    return results;
}


console.log(findConsqSums(nums3, sum3))
console.log(findConsqSums(nums2, sum2))