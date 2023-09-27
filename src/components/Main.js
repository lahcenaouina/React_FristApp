import '../assets/styles/Main.css'
import {StoreProvider} from 'easy-peasy';
import Counter from "./Counter";
import store from "./CounterModel";

const Main = () => {

        return <div className="Main">
          <StoreProvider store={store}>
              <Counter/>
          </StoreProvider>
        </div>;
    };


export default Main;
