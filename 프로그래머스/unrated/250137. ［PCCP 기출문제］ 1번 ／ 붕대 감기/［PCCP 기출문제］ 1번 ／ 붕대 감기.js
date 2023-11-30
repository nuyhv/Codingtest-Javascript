function solution(bandage, health, attacks) {
    let curHealth = health;
    let maxTurn = attacks[attacks.length - 1][0];
    let turn = 0;
    let successiveSec = 0;
    const [castingTime, HPS, bonusHeal] = bandage;
    
    const attackData = attacks.reduce((acc, [turn, damage]) => {
        acc[turn] = damage;
        return acc;
    }, {});

    while (turn <= maxTurn) {
        // 피격 로직
        if (attackData[turn]) {
            const damage = attackData[turn]
            curHealth -= damage;
            successiveSec = 0;

            // 체력이 0 이하일 경우 -1 리턴
            if (curHealth <= 0) {
                return -1;
            }
        } else {
            // 붕대 감기 로직
            successiveSec++;

            if (successiveSec < castingTime) {
                curHealth = Math.min(curHealth + HPS, health);
            } else {
                curHealth = Math.min(curHealth + HPS + bonusHeal, health);

                successiveSec = 0;
            }
        }

        turn++;
    }

    return curHealth;
}