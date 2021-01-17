function cointoss() {
    const num = Math.random() // numは0.0〜1.0のランダムな数値
    // Math.floor 与えられた数値以下の最大の整数を返す。
    // ※Math.randomは1は含まない
    const BACK = 1;
    if (Math.floor(num * 2) === BACK) {
        console.log('裏');
    } else {
        console.log('表');
    }
}

for (let i = 0; i < 10; i++) {
   cointoss();
}

