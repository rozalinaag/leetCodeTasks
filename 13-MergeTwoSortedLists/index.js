var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let head = null;
  let temp = head;

  if (l1.val < l2.val) {
    temp = head = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    temp = head = new ListNode(l2.val);
    l2 = l2.next;
  }

  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = new ListNode(l1.val);
      l1 = l1.next;
      temp = temp.next;
    } else {
      temp.next = new ListNode(l2.val);
      l2 = l2.next;
      temp = temp.next;
    }
  }

  while (l1) {
    temp.next = new ListNode(l1.val);
    l1 = l1.next;
    temp = temp.next;
  }

  while (l2) {
    temp.next = new ListNode(l2.val);
    l2 = l2.next;
    temp = temp.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
