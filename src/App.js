import "./App.css";
import {Warning} from "./Components/Warning"
import {Head} from "./Components/Head"
import {Banner} from "./Components/Banner"
import {Offers} from "./Components/Offers";
import {WhyChoose} from "./Components/WhyChoose";
import {WhoMakes} from "./Components/WhoMakes";
import {Partner} from "./Components/Partner";
import {Surprise} from "./Components/Surprise";
import {Instagram} from "./Components/Instagram";
import {TellaFriend} from "./Components/TellaFriend";
import {Foot} from "./Components/Foot";

function App() {
  return (
    <>
      <Warning/>
      <Head/>
      <Banner/>
      <Offers/>
      <WhyChoose/>
      <WhoMakes/>
      <Partner/>
      <Surprise/>
      <Instagram/>
      <TellaFriend/>
      <Foot/>
    </>
  );
}

export default App;
