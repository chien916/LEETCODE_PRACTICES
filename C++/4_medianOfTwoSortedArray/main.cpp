#include <bits/stdc++.h>

using namespace std;

class Solution {
public:

    double findMedianSortedArrays(vector<int> &nums) {
        auto nums_splitter = nums.begin() + ceil((double) (nums.size() - 1) / 2);
        if (nums.size() % 2 == 0)
            return (double) (*nums_splitter + *prev(nums_splitter)) / 2;
        else
            return *nums_splitter;
    }

    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2) {
        //Corner cases handling:
        if (nums1.empty() && nums2.empty())
            return 0;
        else if (nums1.empty())
            return findMedianSortedArrays(nums2);
        else if (nums2.empty())
            return findMedianSortedArrays(nums1);
        //initial partitioning:
        //**splitter pointing to the first element from right partition
        //**Left partition will be smaller than or equal to right partition
        pair<vector<int>::iterator, vector<int>::iterator> parti_element
                = make_pair(
                        nums1.begin() + floor((double) (nums1.size()) / 2),
                        nums2.begin() + floor((double) (nums2.size()) / 2)
                );
        if (nums1.size() % 2 == 1 && nums2.size() % 2 == 1) parti_element.second++;//Both Odd: Balance the partition!
        while (true) {
            //Conditions check:
            int t_left, t_right, b_left, b_right;
            bool t_left_b_right, t_right_b_left;
            t_left = parti_element.first == nums1.begin() ? INT_MIN : *prev(parti_element.first);
            t_right = parti_element.first == nums1.end() ? INT_MAX : *parti_element.first;
            b_left = parti_element.second == nums2.begin() ? INT_MIN : *prev(parti_element.second);
            b_right = parti_element.second == nums2.end() ? INT_MAX : *parti_element.second;
            t_right_b_left = b_left <= t_right;
            t_left_b_right = t_left <= b_right;
            //Make changes to partitions from checked conditions:
            if (!t_left_b_right) {
                parti_element.first--;
                parti_element.second++;
            } else if (!t_right_b_left) {
                parti_element.first++;
                parti_element.second--;
            } else {
                if ((nums1.size() + nums2.size()) % 2 == 0) {//Even size: med calculated from average
                    return ((double) (max(t_left, b_left) + min(t_right, b_right)) / 2);
                } else {//Odd size: med calculated from directly taking mid element
                    return min(t_right, b_right);
                } //1 1 2 2 2 3
            }
        }
    }
};

int main() {
    Solution s;
    vector<int> nums1 = {1, 2};
    vector<int> nums2 = {3, 4};
    auto result = s.findMedianSortedArrays(nums1, nums2);
    cout << result;
    return 0;
}