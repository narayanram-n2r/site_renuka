
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/Home';
import { useState } from 'react';
import AboutUs from './pages/AboutUs';

const theme = createTheme({
  palette: {
    primary: {
      main: "#148ecd",
      contrastText: "#fff",
      dark: "#46b7f1",
      light: "#46b7f1",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  const [menu,setMenu] = useState('home-menu');

  const handleMenuChange = (menuOption)=>{
    setMenu(menuOption);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='site-container'>
        <Header onMenuChange={handleMenuChange}/>
        {menu=='home-menu'&&<Home></Home>}
        {menu=='about-menu'&&<AboutUs></AboutUs>}
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;
