import { createStore, combineReducers } from 'redux';
import { albumReducer } from './reducers';
import { songReducer } from './reducers';
import { animeReducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools  } from 'redux-devtools-extension';

const store = createStore(combineReducers({ 
    album: albumReducer, 
    song: songReducer,
    anime: animeReducer 
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;