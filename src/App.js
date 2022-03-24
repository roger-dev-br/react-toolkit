import { Provider } from 'react-redux';
import store from './store';
import './App.css';
// import { Counter } from './pages/Counter';
// import Personagem from './pages/Personagens';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produto from './pages/Produto';
import Posts from './pages/Posts';
import Post from './pages/Posts/post';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Produto} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/posts/:id" exact component={Post} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
