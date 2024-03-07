function solution(dots) {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const [x1, y1] = dots[i];
            const [x2, y2] = dots[j];

            const slope = (y2 - y1) / (x2 - x1);

            for (let k = 0; k < dots.length; k++) {
                if (k !== i && k !== j) {
                    const [x3, y3] = dots[k];
                    const [x4, y4] = dots.filter((_, idx) => idx !== i && idx !== j && idx !== k)[0];

                    const otherSlope = (y4 - y3) / (x4 - x3);

                    if (slope === otherSlope) {
                        return 1;
                    }
                }
            }
        }
    }

    return 0;
}
