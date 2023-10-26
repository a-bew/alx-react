import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className={"App-body"}>
        Login to access the full dashboard
      </div>
      <div className='App-footer'>Copyright {getFullYear()} - {getFooterCopy()}</div>
    </>
  );
}

export default App;
