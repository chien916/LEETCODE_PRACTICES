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

class Solution {
public:

    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
        ListNode *toReturn = NULL;
        ListNode *r_current = NULL;
        //insert at beginning
        while (list1 != NULL || list2 != NULL) {
            r_current = new ListNode();
            if (toReturn == NULL) toReturn = r_current;
            if (list1->val < list2->val) {
                r_current->val = list2->val;
            } else {}
        }


    }
};

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}