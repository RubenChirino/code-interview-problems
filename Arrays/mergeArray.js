/* function merge(nums1, m, nums2, n) {
    let reader1 = m  - 1;
    let reader2 = n - 1;
    for (let writter = m + n - 1; writter >= 0; writter--) {
        if (reader1 >= 0 && reader2 >= 0) {
            nums1[writter] = (nums1[reader1] > nums2[reader2]) ? nums1[reader1--] : nums2[reader2--];
        } else if (reader1 >= 0) {
            nums1[writter] = nums1[reader1--];
        } else {
            nums1[writter] = nums2[reader2--];
        }
    }
    return;
}; */

function merge(nums1, m, nums2, n) {
    // Make a copy of the first m elements of nums1.
    const nums1Copy = [];
    for (let i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }

    // Read pointers for nums1Copy and nums2 respectively.
    let p1 = 0;
    let p2 = 0;
            
    // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for (let p = 0; p < m + n; p++) {
        // We also need to ensure that p1 and p2 aren't over the boundaries
        // of their respective arrays.
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[p] = nums1Copy[p1++];
        } else {
            nums1[p] = nums2[p2++];
        }
    }
}


const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log("res =>", result);