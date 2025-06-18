function solution(skill, skill_trees) {
    var answer = 0;
    
    const skillArr = skill.split('');
    
    for (const skills of skill_trees) {
        const filteredSkills = skills.split('').filter(char => skillArr.includes(char));
        
        if (filteredSkills.join('') === skill.slice(0, filteredSkills.length)) {
            answer++;
        }
    }    
    return answer
}