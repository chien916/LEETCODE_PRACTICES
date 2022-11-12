#include <iostream>
#include <string>
#include <vector>
#include <utility>

using namespace std;

class Solution {
private:
	void attempt(const int &n, const int &left_count, const int &right_count, const string &curr_str,
				 vector<string> &to_return) {
		cout << curr_str << endl;
		if (curr_str.size() == n + n) {
			to_return.push_back(curr_str);
			return;
		}
		if (left_count < n)
			attempt(n, left_count + 1, right_count, curr_str + '(', to_return);
		if (left_count > 0 && right_count < left_count)
			attempt(n, left_count, right_count + 1, curr_str + ')', to_return);
	}
public:
	vector<string> generateParenthesis(int n) {
		vector<string> to_return{};
		attempt(n, 0, 0, "", to_return);
		return to_return;
	}
};

int main() {
	Solution s;
	auto r = s.generateParenthesis(10);
	cout << endl;
	for (const auto &i: r)
		cout << i << endl;
	return 0;
}
