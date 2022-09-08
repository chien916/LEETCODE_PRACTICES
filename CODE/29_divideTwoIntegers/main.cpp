#include <bits/stdc++.h>

class Solution {
public:
    int divide(int dividend, int divisor) {
        std::string dividend_s = static_cast<std::bitset<32>>(reinterpret_cast<uint32_t>(dividend)).to_string();
        std::string divisor_s = static_cast<std::bitset<32>>(static_cast<uint32_t>(divisor)).to_string();
        std::cout << dividend_s << std::endl << divisor_s;

        return 0;
    }
};

int main() {
    Solution s;
    s.divide(100, 2421);
    auto i = 0;
}
