#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;

vector<int> compress(const vector<int>& A) {
    vector<int> vals = A;
    sort(vals.begin(), vals.end());
    vals.erase(unique(vals.begin(), vals.end()), vals.end());
    vector<int> compressed(A.size());
    for (int i = 0; i < A.size(); ++i) {
        compressed[i] = lower_bound(vals.begin(), vals.end(), A[i]) - vals.begin() + 1;
    }
    return compressed;
}

struct FenwickTree {
    int n;
    vector<unordered_map<int, int>> bit;
    FenwickTree(int size) : n(size) {
        bit.resize(n + 2);
    }

    void update(int idx, int mask, int val) {
        while (idx <= n) {
            bit[idx][mask] = (bit[idx][mask] + val) % MOD;
            idx += idx & -idx;
        }
    }

    unordered_map<int, int> query(int idx) {
        unordered_map<int, int> result;
        while (idx > 0) {
            for (unordered_map<int, int>::iterator it = bit[idx].begin(); it != bit[idx].end(); ++it) {
                int mask = it->first;
                int cnt = it->second;
                result[mask] = (result[mask] + cnt) % MOD;
            }
            idx -= idx & -idx;
        }
        return result;
    }
};

int get_ans(int N, int Q, vector<int> A, int Cols, vector<vector<int>> Queries) {
    vector<int> compressed = compress(A);
    int maxVal = *max_element(compressed.begin(), compressed.end());

    FenwickTree fw(maxVal);
    vector<unordered_map<int, int>> dp(N);

    for (int i = 0; i < N; ++i) {
        unordered_map<int, int> current;
        int val = compressed[i];
        int original = A[i];

        current[original] = 1;

        unordered_map<int, int> prev = fw.query(val - 1);
        for (unordered_map<int, int>::iterator it = prev.begin(); it != prev.end(); ++it) {
            int mask = it->first;
            int count = it->second;
            int newMask = mask ^ original;
            current[newMask] = (current[newMask] + count) % MOD;
        }

        for (unordered_map<int, int>::iterator it = current.begin(); it != current.end(); ++it) {
            fw.update(val, it->first, it->second);
        }

        dp[i] = current;
    }

    long long total = 0;
    for (int qi = 0; qi < Q; ++qi) {
        int pos = Queries[qi][0];
        int bit = Queries[qi][1];
        int res = 0;

        for (unordered_map<int, int>::iterator it = dp[pos].begin(); it != dp[pos].end(); ++it) {
            int mask = it->first;
            int cnt = it->second;
            if ((mask >> bit) & 1) {
                res = (res + cnt) % MOD;
            }
        }

        total = (total + res) % MOD;
    }

    return total;
}

int main() {
    int N = 2, Q = 1, Cols = 2;
    vector<int> A = {1, 2};
    vector<vector<int>> Queries = {{1, 1}};
    cout << "Output: " << get_ans(N, Q, A, Cols, Queries) << endl;

    A = {1, 2};
    Queries = {{0, 0}};
    cout << "Output: " << get_ans(2, 1, A, 2, Queries) << endl; // should be 1

    return 0;
}
