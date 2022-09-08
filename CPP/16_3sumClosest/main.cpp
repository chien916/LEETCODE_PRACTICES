#include <bits/stdc++.h>

using std::vector;

class Solution {
public:
	[[nodiscard]] int threeSumClosest(vector<int> &nums, int target) {
		int smallest_diff = INT_MAX;
		std::sort(nums.begin(),nums.end());
		std::array<vector<int>::const_iterator, 3> itr{nums.begin(), nums.begin() + 1, nums.end() - 1};
		while (itr.at(1) < itr.at(2)) {
			//test and set two pointers
			while (itr.at(1) < itr.at(2)) {
				auto this_diff = ((*itr.at(0) + *itr.at(1) + *itr.at(2)) - target);
				if(this_diff==0) return target;
				smallest_diff = std::abs(this_diff) < std::abs(smallest_diff) ? this_diff : smallest_diff;
				std::cout << *itr.at(0) << '+' << *itr.at(1) << '+' << *itr.at(2) << '=' << this_diff << '|'
						  << smallest_diff << '\n';
				size_t which_to_move = ((this_diff > 0) ? (*itr.at(1) > *itr.at(2)) : (*itr.at(1) < *itr.at(2))) ? 1
																												 : 2;
				itr.at(1) = (which_to_move == 1) ? itr.at(1) + 1 : itr.at(1);
				itr.at(2) = (which_to_move == 2) ? itr.at(2) - 1 : itr.at(2);
			}
			//increment first pointer
			itr.at(1) = ++itr.at(0) + 1;
			itr.at(2) = nums.end() - 1;
		}
		return target + smallest_diff;
	}
};

int main() {
	Solution s;
	vector<int> nums{-93,-78,-7,50,17,62,-17,25,-10,22,74,1,80,94,5,-42,25,30,-45,-28,54,1,-56,-10,58,-88,-45,0,-6,-93,-76,76,19,66,52,25,84,-42,86,38,50,40,81,87,-1,-97,80,-44,-11,-96,-71,-35,13,26,96,7,-22,-73,21,-88,-4,-65,23,-48,86,63,98,76,7,76,-100,46,-29,-57,-44,38,28,-98,79,-17,-22,-86,-10,96,-29,-52,-53,16,84,99,83,-8,-5,95,-84,-80,-59,91,59,-53,23,-49,-69,24,-70,-12,-24,29,58,-12,-36,-13,-90,29,-57,35,53,-89,81,-73,67,-68,-37,-53,21,2,-24,-17,-53,95,-28,21,45,0,-54,-7,23,-78,38,55,-62,-48,5,-32,11,33};
	auto target{48};
	std::cout << s.threeSumClosest(nums, target);
}
/*
 * [-93,-78,-7,50,17,62,-17,25,-10,22,74,1,80,94,5,-42,25,30,-45,-28,54,1,-56,-10,58,-88,-45,0,-6,-93,-76,76,19,66,52,25,84,-42,86,38,50,40,81,87,-1,-97,80,-44,-11,-96,-71,-35,13,26,96,7,-22,-73,21,-88,-4,-65,23,-48,86,63,98,76,7,76,-100,46,-29,-57,-44,38,28,-98,79,-17,-22,-86,-10,96,-29,-52,-53,16,84,99,83,-8,-5,95,-84,-80,-59,91,59,-53,23,-49,-69,24,-70,-12,-24,29,58,-12,-36,-13,-90,29,-57,35,53,-89,81,-73,67,-68,-37,-53,21,2,-24,-17,-53,95,-28,21,45,0,-54,-7,23,-78,38,55,-62,-48,5,-32,11,33]
48
 */