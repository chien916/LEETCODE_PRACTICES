#include <bits/stdc++.h>

using std::vector;
using std::string;

class Solution {
public:
	vector<string> letterCombinations(string digits) {
		std::vector<std::string> to_return;
		std::unordered_map<char, std::string> h_map{
				{'2', "abc"},
				{'3', "def"},
				{'4', "ghi"},
				{'5', "jkl"},
				{'6', "mno"},
				{'7', "pqrs"},
				{'8', "tuv"},
				{'9', "wxyz"}
		};
		std::vector<std::pair<std::string::iterator, std::string::iterator>> stack_ds_itr;
		if (digits.empty()) return to_return;
		else stack_ds_itr.emplace_back(digits.begin(), h_map[*digits.begin()].begin());
		do {
			//determine whether deeper search should be performed:
			while (stack_ds_itr.back().first < digits.end() - 1) {//if digit iterator NOT pointing to last digit
				//push back a new pair with <next digit> and <first char from mapped string of this next digit>
				stack_ds_itr.emplace_back(stack_ds_itr.back().first + 1,
										  h_map[*(stack_ds_itr.back().first + 1)].begin());
			} //if pointing to last digit, then append to accumulated string array
			std::string to_append;
			for (const auto &i: stack_ds_itr)
				to_append.push_back(*i.second);
			to_return.push_back(to_append);
			stack_ds_itr.back().second++;

			//if the char of mapped string of this digit has reached to the end
			while (stack_ds_itr.back().second == h_map[*stack_ds_itr.back().first].end()) {
				stack_ds_itr.pop_back();
				if (!stack_ds_itr.empty()) stack_ds_itr.back().second++;
				else return to_return;
			}
		} while (true);
	}
};

int main() {
	Solution s;
	auto received = s.letterCombinations("23");
	for (const auto r: received)
		std::cout << r << std::endl;
	return 0;
}
