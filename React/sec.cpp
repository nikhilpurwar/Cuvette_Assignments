#include <bits/stdc++.h>
using namespace std;

int N, M;
vector<vector<int>> A;
map<tuple<int, int, int, int, bool>, bool> dp;
vector<pair<int, int>> dirs = {{1, 0}, {0, 1}};

bool dfs(int ax, int ay, int bx, int by, bool turn) {
    auto key = make_tuple(ax, ay, bx, by, turn);
    if (dp.count(key)) return dp[key];

    if (turn) {
        for (auto [dx, dy] : dirs) {
            int nx = ax + dx, ny = ay + dy;
            if (nx < N && ny < M && A[nx][ny] >= A[bx][by]) {
                if (dfs(nx, ny, bx, by, !turn)) return dp[key] = true;
            }
        }
        return dp[key] = false;
    } else {
        for (auto [dx, dy] : dirs) {
            int nx = bx + dx, ny = by + dy;
            if (nx < N && ny < M && A[nx][ny] >= A[ax][ay]) {
                if (!dfs(ax, ay, nx, ny, !turn)) return dp[key] = false;
            }
        }
        return dp[key] = true;
    }
}

int solve(int n, int m, int q, vector<vector<int>> grid, vector<vector<int>> queries) {
    N = n; M = m; A = grid;
    int re