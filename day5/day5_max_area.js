/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while (left !== right) {
        result = Math.max(Math.min(height[left], height[right]) * (right - left), result)
        if (height[right] < height[left]) {
            right --
        } else {
            left ++
        }
    }
    return result
}