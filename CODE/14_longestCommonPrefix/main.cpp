#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        string toReturn("");
        pair<int, int> coor(0, 0);
        int max_x = strs.size();
        int max_y = (*min_element(strs.begin(), strs.end(),
                                  [](string &s1, string &s2) { return s1.size() < s2.size(); }
        )).size();
        for (int y = 0; y < max_y; y++) {
            char buffer = strs.at(0).at(y);
            bool ifConsistant = true;
            for (int x = 1; x < max_x; x++) {
                if (buffer != strs.at(x).at(y)) {
                    ifConsistant = false;
                    break;
                }
            }
            if (ifConsistant) toReturn += buffer;
            else break;
        }
        return toReturn;
    }
};

int main() {
    Solution s;
    vector<string> vs = {"c", "acc", "ccc"};
    cout << s.longestCommonPrefix(vs);
}