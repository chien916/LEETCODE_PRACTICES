#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        string toReturn = "";
        pair<string::iterator, string::iterator> iter_locator(s.begin(), s.begin());
        while (iter_locator.second < s.end()) {
            //expand from center
            for (int i = 0; iter_locator.first - i >= s.begin() && iter_locator.second + i < s.end(); i++) {
                if (*(iter_locator.first - i) != *(iter_locator.second + i)) break;
                if ((iter_locator.second + i + 1 - iter_locator.first + i) > toReturn.size())
                    toReturn = string(iter_locator.first - i, iter_locator.second + i + 1);
            }
            //update iter_locator
            if (iter_locator.first == iter_locator.second) iter_locator.second++;
            else iter_locator.first++;
        }
        return toReturn;
    }
};

int main() {
    string a = "cbbd";
    Solution s;
    cout << s.longestPalindrome(a);
}