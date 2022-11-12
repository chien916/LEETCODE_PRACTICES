using namespace std;

#include <bits/stdc++.h>

class Solution {
public:
    bool isPalindrome(int x) {
        string s = to_string(x);
        auto ptr_start = begin(s);
        auto ptr_end = end(s) - 1;
        while (ptr_start < ptr_end) {
            if (*ptr_end != *ptr_start) {
                return false;
            }
            ptr_start++;
            ptr_end--;
        }
        return true;
    }
};

int main() {
    Solution s;
    cout << s.isPalindrome(121);
}