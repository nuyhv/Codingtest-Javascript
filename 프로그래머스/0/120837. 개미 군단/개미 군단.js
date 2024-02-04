function solution(hp) {
    let ants = 0;

    while (hp > 0) {
        if (hp >= 5) {
            hp -= 5;
        } else if (hp >= 3) {
            hp -= 3;
        } else if (hp >= 1) {
            hp -= 1;
        }

        ants++;
    }

    return ants;
}