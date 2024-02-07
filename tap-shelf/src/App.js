import { Provider } from 'react-redux';
import LayoutPage from './components/pages/LayoutPage';
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <LayoutPage />
    </Provider>
  );
}

export default App;
