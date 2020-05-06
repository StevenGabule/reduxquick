import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Posts from '../src/components/Post';
import PostForm from '../src/components/PostForm';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
