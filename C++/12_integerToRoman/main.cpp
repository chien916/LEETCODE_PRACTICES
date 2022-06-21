#include <bits/stdc++.h>

using std::string;

class Solution {
public:
	string intToRoman(int num) {
		std::string to_return{};
		std::map<uint16_t, std::string> h_map{
				{1000, "M"},
				{900,  "CM"},
				{500,  "D"},
				{400,  "CD"},
				{100,  "C"},
				{90,   "XC"},
				{50,   "L"},
				{40,   "XL"},
				{10,   "X"},
				{9,    "IX"},
				{5,    "V"},
				{4,    "IV"},
				{1,    "I"}
		};
		while (num > 0) {
			auto this_iter = h_map.lower_bound(num);
			this_iter = this_iter->first == num ? this_iter : std::prev(this_iter);
			to_return.append(this_iter->second);
			num -= this_iter->first;
		}
		return to_return;
	}
};

int main() {
	Solution s;
	std::cout << s.intToRoman(3);
}
