import logo from './logo.svg';
import './App.css';

interface AppProps {
  name:string;
}

function App({ name } : AppProps){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name}
      </header>
    </div>
  );
}

App.defaultProps = {
  name:'daehyun'
}

export default App;
