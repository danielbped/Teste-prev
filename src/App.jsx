import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
