#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int> &nums, int target) {
        vector<int> temp(nums);
        vector<int> toReturn = {0, 0};
        sort(begin(nums), end(nums));
        auto low = begin(nums);
        auto high = prev(end(nums));
        for (; low < high;) {
            if (target == (*low + *high)) {
                int foundIndex = find(begin(temp), end(temp), (*low)) - begin(temp);
                toReturn.at(0) = foundIndex;
                temp.at(foundIndex) = INT_MAX;
                toReturn.at(1) = find(begin(temp), end(temp), (*high)) - begin(temp);
                break;
            } else if (target > (*low + *high))
                low++;
            else if (target < (*low + *high))
                high--;
        }
        return toReturn;
    }
};

int main() {
    vector<int> a = {3, 2, 4};
    int target = 6;
    Solution s;
    for (auto i:s.twoSum(a, target)) {
        cout << i << ' ';
    }
}