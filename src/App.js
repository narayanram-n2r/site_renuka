
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/Home/Home';
import { useState } from 'react';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { Box } from '@mui/material';

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
  const [menu, setMenu] = useState('home-menu');

  const handleMenuChange = (menuOption) => {
    setMenu(menuOption);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header onMenuChange={handleMenuChange} />
      <div className={styles.siteContainer}>
        <Box className={styles.pageWrapper}>
          <Home></Home>
        </Box>
        <Box className={styles.pageWrapper}>
          <AboutUs></AboutUs>
        </Box>
        <Box className={styles.pageWrapper}>
        <Contact></Contact>
        </Box>
        <Footer />
      </div>

    </ThemeProvider>

  );
}

export default App;
