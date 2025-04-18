class Solution {
    mergeKLists(lists) {
        let nodes = [];
        for (let lst of lists) {
            while (lst) {
                nodes.push(lst.val);
                lst = lst.next;
            }
        }
        nodes.sort((a, b) => a - b);

        let res = new ListNode(0);
        let cur = res;
        for (let node of nodes) {
            cur.next = new ListNode(node);
            cur = cur.next;
        }
        return res.next;
    }
}