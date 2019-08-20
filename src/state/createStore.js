import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from './reducers';

const initialState = {
   isLoading: false,
   brands: [],
   models: [],
   policies: [],
   calculationResult: null,
};

const createStore = () =>
   reduxCreateStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
   );

export default createStore;
