#include <bits/stdc++.h>
using namespace std;

int add(int a, int b) {
    if(a<0 || b<0){
        cout << "ERROR" << endl;
        exit(0);
    }
    return a + b;
}

int main() {
    int a, b;
    do{
        cout << "数字を入力してください" << endl;
        cin >> a >> b;
    }while(a<0 || b<0);
    cout << add(3, -2) << endl;
    return 0;
}
