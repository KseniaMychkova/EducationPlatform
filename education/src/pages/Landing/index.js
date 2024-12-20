import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Preview from '../../components/Preview';
import Learning from '../../components/Learning';
import Knowledge from '../../components/Knowledge';
import Progress from '../../components/Progress';


function Home() {
  return (
    <div>
      <Header></Header>
      <Preview></Preview>
      <Learning></Learning>
      <Knowledge></Knowledge>
      <Progress></Progress>
      <Footer></Footer>
    </div>
  );
}

export default Home;