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
    ListNode *middleNode(ListNode *head) {
        vector<ListNode *> list;
        while (head != NULL) {
            list.push_back(head);
            head = head->next;
        }
        return list.at(ceil((double) (list.size() + 1) / 2) - 1);
    }
};


int main() {
    ListNode *num = initialize("123456");
    Solution s;
    cout << s.middleNode(num)->val;
}