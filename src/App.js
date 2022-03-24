import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="Hey ORIGINALS"
        id="HO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeROw
      />
      <Row 
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        title= "Romance Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
