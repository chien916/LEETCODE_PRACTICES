#include <bits/stdc++.h>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {}

    ListNode(int x) : val(x), next(nullptr) {}

    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode *initialize(string s) {
        ListNode *toReturn = nullptr;
        ListNode *r_current = nullptr;
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

    string deinitalize(ListNode *l) {
        string toReturn = "";
        while (l != nullptr) {
            toReturn.append(to_string(l->val));
            l = l->next;
        }
        return toReturn;
    }

    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
        //handle corner cases
        if (list1 == nullptr && list2 == nullptr) return nullptr;
        else if (list1 == nullptr) return list2;
        else if (list2 == nullptr) return list1;
        //initialize poiniter
        ListNode *ptr_toReturn = nullptr;
        ListNode *ptr_current = nullptr;
        bool ifInitialized = false;
        //insert element
        while (list1 != nullptr || list2 != nullptr) {
            //update pointer
            if (!ifInitialized) {
                ptr_current = new ListNode();
                ptr_toReturn = ptr_current;
                ifInitialized = true;
            } else {
                ptr_current->next = new ListNode();
                ptr_current = ptr_current->next;
            }
            //push in value
            if (list2 == nullptr || (list1 != nullptr && list1->val <= list2->val)) {
                ptr_current->val = list1->val;
                list1 = list1->next;
            } else if (list1 == nullptr || (list2 != nullptr && list2->val <= list1->val)) {
                ptr_current->val = list2->val;
                list2 = list2->next;
            }
        }
        return ptr_toReturn;
    }
};

int main() {
    Solution s;
    ListNode *l_a = s.initialize("");
    ListNode *l_b = s.initialize("");
    ListNode *result = s.mergeTwoLists(l_a, l_b);
    cout << s.deinitalize(result);
}