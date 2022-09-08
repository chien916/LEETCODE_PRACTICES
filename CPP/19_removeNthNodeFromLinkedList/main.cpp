#include <iostream>
#include <deque>

using namespace std;
//accepted
struct ListNode {
	int val;
	ListNode *next;

	ListNode() : val(0), next(nullptr) {}

	ListNode(int x) : val(x), next(nullptr) {}

	ListNode(int x, ListNode *next) : val(x), next(next) {}
};
/
class Solution {
public:
	ListNode *removeNthFromEnd(ListNode *head, int n) {
		n--;//indexing n
		deque<ListNode *> ptr_deq;
		while (head != nullptr) {
			ptr_deq.push_front(head);
			head = head->next;
		}
		if (ptr_deq.empty()) {//case 1: list is empty
			return nullptr;
		} else if (n == 0 && ptr_deq.size() == 1) {//case 2: list[n] being both head and tail
			return nullptr;
		} else if (n == ptr_deq.size() - 1) {//case 3: list[n] is head in list and tail in deque
			return ptr_deq.at(n - 1);
		} else if (n == 0) {//case 4: list[n] is tail in list and head in deque
			ptr_deq.at(n + 1)->next = nullptr;
		} else {//case 5: list[n] is neither tail nor list in either list or deque
			ptr_deq.at(n + 1)->next = ptr_deq.at(n - 1);
		}
		return ptr_deq.back();
	}
};

int main() {
	std::cout << "Hello, World!" << std::endl;
	return 0;
}
