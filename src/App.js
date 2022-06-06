import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner />

     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchToprated} isLargeRow />
     <Row title="Trending now" fetchUrl={requests.fetchTrending} />
     <Row title="Popular" fetchUrl={requests.fetchPopular} />
     <Row title="Action" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
