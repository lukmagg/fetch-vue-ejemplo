const urlBase = 'https://kitsu.io/api/'


module.exports.getAnime = function(){
    return fetch(urlBase+'edge/trending/anime?limit=10').then((res) => res.json())
}


