#include <bits/stdc++.h>

using namespace std;
//dynamic programming
//row - string to be compared
//column - regex expression

class Solution {
public:
	bool isMatch(string s, string p) {
		//Initialize DP Array
		auto dp = vector<vector<bool>>(s.size() + 1, vector<bool>(p.size() + 1, false));
		dp.at(0).at(0) = true;
		for (auto col = 1; col <= p.size(); col++)
			if ('*' == p.at(col - 1))
				dp.at(0).at(col) = dp.at(0).at(col - 2);
		//Iterate through Strings
		for (auto row = 1; row <= s.size(); row++) {
			for (auto col = 1; col <= p.size(); col++) {
				if ('.' == p.at(col - 1) || s.at(row - 1) == p.at(col - 1))//Case 1: REGEX - CHAR MATCH
					dp.at(row).at(col) = dp.at(row - 1).at(col - 1);
				else if ('*' == p.at(col - 1)) {//Case 2: REGEX - STAR , CHAR - MATCH
					dp.at(row).at(col) = dp.at(row).at(col - 2);
					if ('.' == p.at(col - 2) || s.at(row - 1) == p.at(col - 2))
						dp.at(row).at(col) = dp.at(row - 1).at(col)||dp.at(row).at(col);
				} else
					dp.at(row).at(col) = false;
			}
		}
		return dp.back().back();
	}
};

int main() {
	Solution s;
	std::cout << boolalpha << s.isMatch("aaa", "ab*a*c*a");
}