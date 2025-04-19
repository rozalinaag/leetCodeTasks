class Solution {
    findRedundantConnection(edges) {
        const n = edges.length;
        const adj = Array.from({ length: n + 1 }, () => []);

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = Array(n + 1).fill(false);
        const cycle = new Set();
        let cycleStart = -1;

        const dfs = (node, par) => {
            if (visit[node]) {
                cycleStart = node;
                return true;
            }
            visit[node] = true;
            for (const nei of adj[node]) {
                if (nei === par) continue;
                if (dfs(nei, node)) {
                    if (cycleStart !== -1) cycle.add(node);
                    if (node === cycleStart) {
                        cycleStart = -1;
                    }
                    return true;
                }
            }
            return false;
        };

        dfs(1, -1);

        for (let i = edges.length - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (cycle.has(u) && cycle.has(v)) {
                return [u, v];
            }
        }
        return [];
    }
}