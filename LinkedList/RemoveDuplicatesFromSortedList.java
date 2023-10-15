// Question
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // Edge Cases
        if (head == null) {
            return head;
        }
        // Through the list
        ListNode currNode = head;
        while (currNode != null && currNode.next != null) {
            if (currNode.val == currNode.next.val) {
                currNode.next = currNode.next.next;
            } else {
                currNode = currNode.next;
            }
        }
        return head;
    }
}

// Tests:

/* 
Input: head = [1,1,2]
Output: [1,2]
*/

/* 
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

// Solution Explanation link: 
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/4110824/java-solution-0ms-beats-100-bcr/
