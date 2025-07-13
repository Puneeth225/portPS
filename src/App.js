// import logo from './logo.svg';
import styles from './App.module.css';
import {AboutMe} from './components/AboutMe/AboutMe';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { MoreMe} from './components/MoreMe/MoreMe';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <AboutMe />
      <MoreMe/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
