using namespace std;

#include <bits/stdc++.h>

class Solution {
public:
    int max(int a, int b) {
        if (a > b) return a;
        else return b;
    }

    int lengthOfLongestSubstring(string s) {
        auto lower_iterator = s.begin();
        auto upper_iterator = s.begin();
        set<char> hashSet;
        int max_length = 0;
        while (upper_iterator < s.end()) {
            auto searchResult = hashSet.find(*upper_iterator);//peek at next char and see if its in hashset
            if (searchResult != hashSet.end()) {//if its in hashset
                hashSet.erase(*lower_iterator);
                lower_iterator++;
            } else {//if its not in hashset
                hashSet.insert(*upper_iterator);
                upper_iterator++;
                max_length = max(max_length, upper_iterator - lower_iterator);
            }
        }
        return max_length;
    }
};

int main() {
    Solution s;
    cout << s.lengthOfLongestSubstring("abcabcbb");
}