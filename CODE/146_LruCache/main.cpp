#include <bits/stdc++.h>

/*const auto compare = [](std::pair<int, int> &p1, std::pair<int, int> &p2) { return p1.second < p2.second; };*/

using t_access = std::chrono::time_point<std::chrono::steady_clock>;
auto t_block_compare = [](std::pair<int32_t, t_access> &cb1, std::pair<int32_t, t_access> &cb2) {
    return cb1.second < cb2.second;
};
using c_block = std::set<int, std::pair<int32_t, t_access>, decltype(t_block_compare)>;

class LRUCache {
private:
    c_block cache;
    int capacity;

public:
    LRUCache(int capacity) {
        this->capacity = capacity;
        cache = c_block(t_block_compare);
    }

    int get(int key) {
        auto a = cache.at(2);
    }

    void put(int key, int value) {
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */

int main() {
    LRUCache obj = LRUCache(4);
    return 1;
}
