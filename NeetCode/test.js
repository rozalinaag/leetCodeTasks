 function largestRectangleArea(heights) {
        const n = heights.length;
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            let height = heights[i];

            let rightMost = i + 1;
            while (rightMost < n && heights[rightMost] >= height) {
                rightMost++;
            }

            let leftMost = i;
            while (leftMost >= 0 && heights[leftMost] >= height) {
                leftMost--;
            }

            rightMost--;
            leftMost++;
            maxArea = Math.max(maxArea, height * (rightMost - leftMost + 1));
        }
        return maxArea;
    }
