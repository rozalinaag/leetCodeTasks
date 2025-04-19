class Solution {
    maxPathSum(root) {
        let res = -Infinity;

        function getMax(root) {
            if (!root) return 0;
            let left = getMax(root.left);
            let right = getMax(root.right);
            let path = root.val + Math.max(left, right);
            return Math.max(0, path);
        }

        function dfs(root) {
            if (!root) return;
            let left = getMax(root.left);
            let right = getMax(root.right);
            res = Math.max(res, root.val + left + right);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return res;
    }
}