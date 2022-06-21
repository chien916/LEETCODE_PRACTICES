class Solution(object):
    def minCut(self, s):
        """
        :type s: str
        :rtype: int
        """
        int_strLength = len(s)  #字符串长度
        list_list_dpPalin = [[False]*int_strLength]*int_strLength   #dp[r][c]代表字符串s[r:c]是否为回文 初始默认全部非回文
        for int_i in range(0,int_strLength):    #遍历每个字符
            list_list_dpPalin[int_i][int_i] = True  #单独的字符都是一个回文


        temp = 1

Solution().minCut("banana")