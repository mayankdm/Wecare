import logo from './logo.svg';
import './App.css';
import WecareNavbar from './components/navbar';
import WecareFooter from './components/footer';
import Body from './components/body';

function App() {
  return (
    <>
      <WecareNavbar></WecareNavbar>
      <Body></Body>
      <WecareFooter></WecareFooter>
    </>
  );
}

export default App;
