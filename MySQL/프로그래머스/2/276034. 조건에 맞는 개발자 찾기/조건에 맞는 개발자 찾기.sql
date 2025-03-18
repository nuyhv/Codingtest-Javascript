-- 코드를 작성해주세요
SELECT 
    D.ID, 
    D.EMAIL, 
    D.FIRST_NAME, 
    D.LAST_NAME
FROM DEVELOPERS D
WHERE (D.SKILL_CODE & (SELECT SUM(CODE) 
                       FROM SKILLCODES 
                       WHERE NAME IN ('Python', 'C#'))) > 0
ORDER BY D.ID ASC;
