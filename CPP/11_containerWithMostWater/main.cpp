#include <bits/stdc++.h>

using std::vector;

//Two pointers problem - approaching to the center
class Solution {
public:
	int maxArea(vector<int> &height) {
		auto itr = std::make_pair(height.begin(), height.end() - 1);
		auto getArea = [&itr = std::as_const(itr)]() {
			return static_cast<uint32_t>(std::min(*itr.first, *itr.second) * (itr.second - itr.first));
		};
		auto max_area{getArea()};
		while (itr.first < itr.second) {
			if (*(itr.first) < *(itr.second))
				itr.first++;
			else
				itr.second--;
			max_area = std::max(max_area, getArea());
		}
		return max_area;
	}
};

int main() {
	Solution s;
	auto v = std::vector<int>{1, 2, 4, 3};
	std::cout << s.maxArea(v) << std::endl;
	return 0;
}
