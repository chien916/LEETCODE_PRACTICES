using namespace std;

#include <bits/stdc++.h>

class Solution {
public:
    int findComplement(int num) {
        int toReturn = 0;
        int count = 0;
        while (num > 0) {
            int lastBit = !(bool)(num % 2);
            toReturn += round(pow(2.0, count)) * lastBit;
            num /= 2;
            count += 1;
        }
        return toReturn;
    }
};


int main() {
    Solution s;
    cout << s.findComplement(5);
}