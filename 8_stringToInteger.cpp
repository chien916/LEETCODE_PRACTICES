#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
	[[nodiscard]] int myAtoi(string s) {
		//trimming:
		{
			std::regex regex_to_search{"^\\s*[+|-]?\\d+"};
			std::smatch regex_matched;
			std::regex_search(s, regex_matched, regex_to_search);
			s = regex_matched[0];
		}
		int64_t final_integer{};
		bool positive = true;
		//converting
		{
			for (auto c = s.begin(); c < s.end(); c++) {
				if (*c == ' ')
					continue;
				else if (*c == '-') {
					positive = false;
					continue;
				} else if (*c == '+')
					continue;
				int32_t new_digit = *c - '0';
				if (final_integer > ((positive ? INT32_MAX : -int64_t(INT32_MIN)) - new_digit) / 10) {
					return positive ? INT32_MAX : INT32_MIN;
				} else{
					(final_integer *= 10) += new_digit;
				}
			}
		}
		//bound-checks

		return positive ? final_integer : -final_integer;
	}
};

int main() {
	Solution s;
	std::cout << s.myAtoi("-2147483648");
}