import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Nav>

      </Nav>
      <div className='wrap'>
        <main className='home'>
          <AboutMe>

          </AboutMe>
          <Portfolio>

          </Portfolio>

          <Resume>

          </Resume>
        </main>
        <Contact>

        </Contact>
      </div>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
