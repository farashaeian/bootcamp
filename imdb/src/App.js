import './App.css';
import Router from './components/Router';
import { GlobalStyle } from './style/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
