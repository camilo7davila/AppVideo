import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer/videos';
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['SET_SELECTED_MOVIE']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

// const store = createStore(
//     reducer,
//     {
//         suggestionList: [],
//         categoryList: [],
//     },
//     applyMiddleware(reduxThunk)
// )

export { store, persistor };