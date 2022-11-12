#include <bits/stdc++.h>

using namespace std;

class Solution {

public:
    bool isValid(string s) {
        stack<unsigned short> stack;
        for (const char &c:s) {
            switch (c) {
                case '(':
                    stack.push(1);
                    break;
                case ')':
                    if (stack.empty() || stack.top() != 1) return false;
                    else stack.pop();
                    break;
                case '[':
                    stack.push(2);
                    break;
                case ']':
                    if (stack.empty() || stack.top() != 2) return false;
                    else stack.pop();
                    break;
                case '{':
                    stack.push(3);
                    break;
                case '}':
                    if (stack.empty() || stack.top() != 3) return false;
                    else stack.pop();
                    break;
                default:
                    throw exception();
            }
        }
        return stack.empty();
    }
};

int main() {
    Solution s;
    cout << s.isValid("()[}");
}