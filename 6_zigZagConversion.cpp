#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    void clock(int &prev_row, int &next_row, const int &max_row) {
        if (max_row == 0) return;
        int prev_row_copy = prev_row;
        prev_row = next_row;
        if (prev_row == 0) next_row = prev_row + 1;
        else if (prev_row == max_row) next_row = prev_row - 1;
        else {
            if (prev_row_copy < prev_row) next_row = prev_row + 1;
            else next_row = prev_row - 1;
        }
    }

    string convert(string s, int numRows) {
        vector<string> matrix(numRows, "");
        int prev_row = 0, next_row = 1;
        for (const char &c:s) {
            matrix.at(prev_row).push_back(c);
            clock(prev_row, next_row, numRows - 1);
        }
        string toReturn;
        for (const string &s:matrix) {
            toReturn.append(s);
        }
        return toReturn;
    }
};

int main() {
    string s = "AB";
    Solution solution;
    cout << solution.convert(s, 1);
}