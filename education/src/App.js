import style from './App.module.css';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Preview from './components/Preview';
import Learning from './components/Learning';


function App() {
  return (
    <div>
      <Header></Header>
      <Preview></Preview>
      <Learning></Learning>
      <Footer></Footer>
    </div>
  );
}

export default App;
