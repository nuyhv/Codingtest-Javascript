function solution(bandage, health, attacks) {
    let curHealth = health
    let maxTurn = attacks[attacks.length - 1][0];
    let turn = 0;
    let success = 0;
    const [castingTime, HPS, bonusHeal] = bandage;
    
    const attackData = attacks.reduce((acc, [turn, damage]) => {
        acc[turn] = damage;
        return acc;
    }, {});

    while (turn <= maxTurn) {
        if (attackData[turn]) {
            const damage = attackData[turn]
            curHealth -= damage;
            success = 0;

            if (curHealth <= 0) {
                return -1;
            }
        } else {
            success++;

            if (success < castingTime) {
                curHealth = Math.min(curHealth + HPS, health);
            } else {
                curHealth = Math.min(curHealth + HPS + bonusHeal, health);

                success = 0;
            }
        }

        turn++;
    }

    return curHealth;
}