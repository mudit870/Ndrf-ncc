import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
         <Header />
        <div className='app_body'>
          <Feed />
        </div>
    </div>
  );
}

export default App;
