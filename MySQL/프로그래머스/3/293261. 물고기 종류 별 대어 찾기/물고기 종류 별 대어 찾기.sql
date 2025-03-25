-- 코드를 작성해주세요
WITH MAX_FISH AS (
    SELECT FISH_TYPE, MAX(LENGTH) AS MAX_LENGTH
    FROM FISH_INFO
    WHERE LENGTH IS NOT NULL
    GROUP BY FISH_TYPE
)
SELECT f.ID, n.FISH_NAME, f.LENGTH
FROM FISH_INFO f
JOIN MAX_FISH m ON f.FISH_TYPE = m.FISH_TYPE AND f.LENGTH = m.MAX_LENGTH
JOIN FISH_NAME_INFO n ON f.FISH_TYPE = n.FISH_TYPE
ORDER BY f.ID;
