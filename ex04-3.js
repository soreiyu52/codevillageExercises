const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
    if (score >= 90) {
        return  '秀';
    } else if (score >= 75) {
        return '優';
    } else if (score >= 60) {
        return '良';
    } else if (score >= 30) {
        return '可';
    } else {
        return '不可';
    }
}

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
scores.forEach((score) => {
    console.log(scorenig(score));
})
