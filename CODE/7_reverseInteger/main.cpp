#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int reverse(int x) {
        string s = to_string(x);
        if (s.at(0) == '-') std::reverse(s.begin() + 1, s.end());
        else std::reverse(s.begin(), s.end());
        try {
            return stoi(s);
        }
        catch (out_of_range &o) {
            return 0;
        }
    }
};

int main() {
    Solution s;
    cout << s.reverse(123);
}