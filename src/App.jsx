import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
