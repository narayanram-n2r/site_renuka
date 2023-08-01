
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import { Box } from '@mui/material';
import About from './pages/About';
import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);



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

  const [menu, setMenu] = useState();
  const [pageNum, setPageNum] = useState(1);
  const bodyRef = useRef(null);
  const sectionIdList = ['home', 'about', 'contact']
  let curSection = useRef(1);
  let isScrollInProgress = useRef(false)

  const handleMenuChange = (menuOption) => {

    let menu = menuOption.split('-')[0];
    if( sectionIdList.indexOf(menu)==-1 ){
      return
    }
    
    let sectionId = `#${menu}-section`;
    isScrollInProgress.current = true;
    curSection.current = sectionIdList.indexOf(menu)+1;
    gsap.to(bodyRef.current, { duration: 1, scrollTo: sectionId, onComplete: onScrollComplete });
    
  }

  const onScrollComplete = () => {
    isScrollInProgress.current = false;
  }

  const handleScroll = (event) => {
    let sectionNum = curSection.current;
    if (event.deltaY > 0 && !isScrollInProgress.current && sectionNum < sectionIdList.length) {
      isScrollInProgress.current = true;
      ++sectionNum;
      curSection.current = sectionNum;
      let sectionId = `#${sectionIdList[sectionNum - 1]}-section`;
      gsap.to(bodyRef.current, { duration: 1, scrollTo: sectionId, onComplete: onScrollComplete });
    } else if (event.deltaY < 0 && !isScrollInProgress.current && sectionNum > 1) {
      isScrollInProgress.current = true;
      --sectionNum;
      curSection.current = sectionNum;
      let sectionId = `#${sectionIdList[sectionNum - 1]}-section`;
      gsap.to(bodyRef.current, { duration: 1, scrollTo: sectionId, onComplete: onScrollComplete });
    }
  }


  return (

    <ThemeProvider theme={theme}>
      <Header onMenuChange={handleMenuChange} />
      <div className={styles.siteContainer} ref={bodyRef} onWheel={handleScroll}>
        <Box className={`${styles.pageWrapper}`} id="home-section" >
          <Home></Home>
        </Box>
        <Box className={`${styles.pageWrapper}`} id="about-section">
          <About></About>
        </Box>
        <Box className={`${styles.pageWrapper}`} id="contact-section">
          <Contact></Contact>
        </Box>

      </div>

    </ThemeProvider >

  );
}

export default App;
