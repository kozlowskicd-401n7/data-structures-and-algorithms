'use strict';

const LinkedList = require('../linked-lists/linkedlist.js');

const mergeLists = (list1, list2) => {
    let newList = new LinkedList;
    for (let i = 0; i < (list1.length + list2.length) / 2; i++) {
      let nodeA = list1.getKthFromEnd(list1.length - (i+1));
      let nodeB = list2.getKthFromEnd(list2.length - (i+1));
      newList.append(nodeA);
      newList.append(nodeB);
    }
    return newList;
}

module.exports = mergeLists;