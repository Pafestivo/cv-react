import { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
      </div>
    )
  }
}
export default App;