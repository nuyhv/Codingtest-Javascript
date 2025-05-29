function solution(genres, plays) {
    let genreMap = new Map();
    let genrePlays = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        let play = plays[i];
        
        if (!genreMap.has(genre)) {
            genreMap.set(genre, []);
        }
        genreMap.get(genre).push({ id: i, play: play });
        
        if (!genrePlays.has(genre)) {
            genrePlays.set(genre, 0);
        }
        genrePlays.set(genre, genrePlays.get(genre) + play);
    }

    let sortedGenres = [...genrePlays.entries()].sort((a, b) => b[1] - a[1]);
    
    let result = [];
    
    for (let [genre, _] of sortedGenres) {
        let songs = genreMap.get(genre).sort((a, b) => {
            if (b.play === a.play) {
                return a.id - b.id;
            }
            return b.play - a.play;
        });
        
        for (let i = 0; i < Math.min(songs.length, 2); i++) {
            result.push(songs[i].id);
        }
    }
    
    return result
}
