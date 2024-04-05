function getBucketId(num, width) {
    return num < 0 ? Math.floor((num + 1) / width) - 1 : Math.floor(num / width);
}

function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
    if (valueDiff < 0 || indexDiff < 0 || nums.length < 2) return false;
    const bucket = new Map();
    const width = valueDiff + 1;

    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        const bucketId = getBucketId(num, width);

        if (bucket.has(bucketId)) return true;
        if (bucket.has(bucketId - 1) && Math.abs(num - bucket.get(bucketId - 1)) < width) return true;
        if (bucket.has(bucketId + 1) && Math.abs(num - bucket.get(bucketId + 1)) < width) return true;

        bucket.set(bucketId, num);
        if (i >= indexDiff) bucket.delete(getBucketId(nums[i - indexDiff], width));
    }

    return false;
}

// Ejemplo de datos para debuggear
const nums = [1, 2, 3, 1]; 
const indexDiff = 3;
const valueDiff = 0;

console.log(`Resultado: ${containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)}`); // true