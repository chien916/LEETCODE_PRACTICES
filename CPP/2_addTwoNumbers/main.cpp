#include <bits/stdc++.h>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {}

    ListNode(int x) : val(x), next(nullptr) {}

    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

ListNode *initialize(string s) {
    ListNode *toReturn = NULL;
    ListNode *r_current = NULL;
    //insert at beginning
    r_current = new ListNode();
    toReturn = r_current;
    r_current->val = *(s.begin()) - '0';
    //insert at middle
    for (string::iterator i = s.begin() + 1; i < s.end(); i++) {
        r_current->next = new ListNode();
        r_current = r_current->next;
        r_current->val = *i - '0';
    }
    return toReturn;
}
//submission accepted
class Solution {
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode *toReturn = NULL;
        ListNode *r_current = NULL;
        int carryOut = 0;
        int toAdd1, toAdd2;
        //insert at begining
        toAdd1 = l1 == NULL ? 0 : l1->val;
        toAdd2 = l2 == NULL ? 0 : l2->val;
        r_current = new ListNode();
        toReturn = r_current;
        r_current->val = (toAdd1 + toAdd2) % 10;
        carryOut = (toAdd1 + toAdd2) / 10;
        l1 = l1 == NULL ? l1 : l1->next;
        l2 = l2 == NULL ? l2 : l2->next;
        //insert at middle
        while (true) {
            if (l1 == NULL && l2 == NULL && carryOut == 0) break;
            toAdd1 = l1 == NULL ? 0 : l1->val;
            toAdd2 = l2 == NULL ? 0 : l2->val;
            r_current->next = new ListNode();
            r_current = r_current->next;
            r_current->val = (toAdd1 + toAdd2 + carryOut) % 10;
            carryOut = (toAdd1 + toAdd2 + carryOut) / 10;
            l1 = l1 == NULL ? l1 : l1->next;
            l2 = l2 == NULL ? l2 : l2->next;
        }
        return toReturn;
    }
};

int main() {
    ListNode *num1, *num2;
    num1 = initialize("543");
    num2 = initialize("9876");
    Solution s;
    s.addTwoNumbers(num1, num2);
}