import './assets/styles/style.css';
import { Header,ImageList,Search } from './components/index';

function App() {
  return (
    <div>
      <Header header={"from App.jsx"}></Header>
      <div className="main">
        <div>
          <h2>Search↓</h2>
          <Search></Search>
        </div>
        <div>
          <h2>ImageList↓</h2>
          <ImageList></ImageList>
        </div>
      </div>
    </div>
  );
}

export default App;
