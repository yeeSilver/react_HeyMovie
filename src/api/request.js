const requests = {
  fetchNowPlaying: "movie/now_playing",
  fetchNetflixOriginals: "/discover/tv?with_networks=213",
  fetchTopRated: "movie/top_rated",
  fetchTrending: "/trending/all/week",
  fetchActionMovie: "/discover/move?with_grenres=28",
  fetchComedyMovie: "/discover/move?with_grenres=35",
  fetchHorrorMovie: "/discover/move?with_grenres=27",
  fetchRomanceMovie: "/discover/move?with_grenres=1049",
  fetchDocumentaries: "/discover/move?with_grenres=99",
}

export default requests;