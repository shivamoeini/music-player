import "./App.css";
import AudioList from "./components/AudioList";
import Header from "./components/Header";
import SearchInput from "./components/Searchinput";
import Tabs from "./components/Tabs";
import { useEffect, useState } from "react";
import FixFooter from "./components/FixFooter";
import { baseUrl } from "./config";
function App() {
  const [list, setList] = useState(false);
  const [appData,setAppData]=useState({});
  const onBackButtonPress = () => {
    setList(false);
  };

 useEffect(() => {
    fetch(`${baseUrl}/song`)
      .then((res) => res.json())
      .then((jsonResp) => {
        console.log({ jsonResp });
      setAppData(jsonResp.appData)
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="App m-20">
      <Header />
      <h2 className="mtb-20 app-quote">Find the best music for your code</h2>
      <SearchInput />
      <Tabs tabData={appData['homeScreen']} />
      {list && <AudioList onBackButtonPress={onBackButtonPress} />}

      {/* <button onClick={()=>setList(true)}>btn</button> */}
      <FixFooter />
    </div>
  );
}

export default App;
