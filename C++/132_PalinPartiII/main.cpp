#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool report = true;

    void print(string s) { if (report)cout << s; }

    int minCut(string s) {
        //首先进行所有组合的子字符串是否为回文
        if (s.length() <= 1) return 0;//如果字符串长度为0或者1，那么它本身就是回文，不需要切割
        auto dp_palin = vector<vector<bool>>//新建一个存储布尔类型二维容器作为dp记录
                (s.length(), vector<bool>(s.length(), false));   //其中dp_palin[i][j]代表s[i:j]是否为回文 默认不是回文
        auto dp_cut = vector<int>(s.length(), 99999);//此外dp_cut[i][j]代表s[i:j]最少数量的切割 默认99999次切割
        //注意：此处迭代索引i为子字符串末尾索引
        int step = 0;//定义变量步进，意味着处理某个字符串需要步进几次 步进=末尾字符串迭代索引-初始字符串迭代索引 初始步进数为0 初始处理字符串长度为1
        for (auto i = step; i < s.length();) {
            int extraCut = i;//默认当前切割数为可能的最大值，即切割所有字符
            if (step == 0) {
                dp_palin.at(i).at(i) = true;//一个字符的字符串 则必然是回文
                extraCut = 0;//一个字符不需要切割便是回文
            } else if (step == 1) {
                dp_palin.at(i - 1).at(i) = s.at(i - 1) == s.at(i);//两个字符的字符串 只要两个字符相同则是回文
                extraCut = !(s.at(i) == s.at(i - 1));
                //两个字符如果一样则0次切割 不一样则1次切割 利用布尔到整形的强制转换赋予“是不是不一样”
            } else {//三个字符以上的字符串 需要满足以下两个条件才能是回文
                bool cond1 = s.at(i - step) == s.at(i); //条件1：字符串初始字符和末尾字符必须相同
                bool cond2 = dp_palin.at(i - step + 1).at(i - 1);//条件2：去除首末字符后的字符串必须也是回文 （递归思想）
                if (cond1 && cond2) {//两个条件同时满足 则此字符串是回文
                    dp_palin.at(i - step).at(i) = true;//设置当前回文dp为真
                    extraCut = 0;
                    //如果此子字符串是回文且此子字符串前有字符串，则此次切割数等于到目前位置上一个位置的子字符串切割数加一
                    //加一是因为要切割此回文和此字符串之前的字符串，不然无法保证此字符串连上前面的子字符串仍然是回文
                    //如果此子字符串前没有字符串，则到目前位置总字符串的最小切割数为0，因为不需要分割此字符串和此字符串之前的字符串
                } else {
                    extraCut = step;
                    //如果此字符串不是回文，那么到目前位置的切割数是到目前位置上一个位置的子字符串切割数加上步进数加一
                    //加上步进数是因为要在此字符串的每一个字符之间切割，加一是因为要切割此子字符串和此字符串之前的字符串
                    //这里假定此字符串内部不包含任何回文子字符串，因为即使有，当循环往后进行时这种情况会被考虑进去
                }
            }
            int currentCut = (i - step <= 0) ? extraCut : dp_cut.at(i - step - 1) + extraCut + 1;
            dp_cut.at(i) = min(dp_cut.at(i), currentCut);
            //如果刚算出来的到目前位置总字符串的最小切割数比之前的最小切割数记录要小，则把小的切割数作为到目前位置总字符串的最小切割数
            if (i - step == 0) {
                i++;
                step = 0;
            } else step++;
            //if (i == s.length() - 1) i = step++;//当检查完所有此步进长度的子字符串后，增加步进长度，同时重置迭代索引
        }
        return dp_cut.at(s.length() - 1);
    }
};

int main() {
    Solution s;
    cout << s.minCut("coder");
}