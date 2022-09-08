#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int romanToInt(string s) {
        int toReturn = 0;
        auto pointer = s.begin();
        while (pointer < s.end()) {
            if (*pointer == 'I') {
                if (*next(pointer) == 'V') {
                    toReturn += 4;
                    pointer += 2;
                } else if (*next(pointer) == 'X') {
                    toReturn += 9;
                    pointer += 2;
                } else {
                    toReturn += 1;
                    pointer += 1;
                }
            } else if (*pointer == 'X') {
                if (*next(pointer) == 'L') {
                    toReturn += 40;
                    pointer += 2;
                } else if (*next(pointer) == 'C') {
                    toReturn += 90;
                    pointer += 2;
                } else {
                    toReturn += 10;
                    pointer += 1;
                }
            } else if (*pointer == 'C') {
                if (*next(pointer) == 'D') {
                    toReturn += 400;
                    pointer += 2;
                } else if (*next(pointer) == 'M') {
                    toReturn += 900;
                    pointer += 2;
                } else {
                    toReturn += 100;
                    pointer += 1;
                }
            } else if (*pointer == 'V') {
                toReturn += 5;
                pointer += 1;
            } else if (*pointer == 'L') {
                toReturn += 50;
                pointer += 1;
            } else if (*pointer == 'D') {
                toReturn += 500;
                pointer += 1;
            } else if (*pointer == 'M') {
                toReturn += 1000;
                pointer += 1;
            } else {
                throw exception();
            }
        }
        return toReturn;
    }
};

int main() {
    Solution s;
    cout << s.romanToInt("MCMXCIV");
}