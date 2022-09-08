#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int> &nums) {
        short size = nums.size();
        if (size < 2) return size;
        short cur_index = 0;
        short nex_index = 1;
        while (nex_index < size) {
            if (nums.at(cur_index) != nums.at(nex_index))
                nums.at(++cur_index) = nums.at(nex_index++);
            else
                nex_index++;
        }
        return cur_index + 1;
    }
};

int main() {
    std::cout << __cplusplus << std::endl;
    return 0;
}