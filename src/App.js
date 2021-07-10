
import './App.css';
import Row from './Row';
import requests from './requets'
import Banner from'./Banner.js'
import Nav from'./Nav.js'
function App() {
  return (
    <div className="app">
      {/*navbar*/}
      <Nav/>
      {/*banner*/}
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.FetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.FetchComedyMovies}/>
      <Row title='Horror Movies'  fetchUrl={requests.FetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.FetchRomanceMovies}/>
      <Row title='Documentries' fetchUrl={requests.FetchDocumentries}/>
    </div>
  );
}

export default App;
