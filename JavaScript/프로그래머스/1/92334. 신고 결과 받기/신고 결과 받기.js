function solution(id_list, report, k) {
    const userInfo = id_list.map(id => ({ id, reported: [], mailCount: 0, warnCount: 0 }))

    const reportList = [...new Set(report)].map(str => str.split(' '));

    for (let i = 0; i < reportList.length; i++) {
        const [reporter, target] = reportList[i];

        const targetUser = userInfo.find(user => user.id === reporter);
        const warnUser = userInfo.find(user => user.id === target);
        if (targetUser) {
            targetUser.reported.push(target);
            warnUser.warnCount++;
        }
    }

    const banned = userInfo
        .filter(user => user.warnCount >= k)
        .map(user => user.id);
    
    userInfo.forEach(data => {
        data.reported.forEach(reportedId => {
            if (banned.includes(reportedId)) {
                data.mailCount++
            }
        });
    });
    
    return userInfo.map(data => data.mailCount)
}
