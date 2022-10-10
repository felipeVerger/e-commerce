import { ThemeProvider } from 'styled-components';
import { themes } from './assets/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContainer } from './AppStyles';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <BrowserRouter>
        <AppContainer>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/auth' element={<Auth/>}/>
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
