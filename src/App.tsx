import './App.css';
import {useState} from 'react';

const IncButton = ({diff, val, setVal}:{
  diff: number,
  val: number,
  setVal: React.Dispatch<React.SetStateAction<number>>
}) =>{
  const clicked = () => {
    setVal(val + diff);
  }
  return(
    <button onClick={clicked}>{diff}</button>
  )
}

function App() {
  const [cnt, setCnt] = useState(0);
  const cliked = () =>{
    setCnt(cnt + 1)
  }

  return (
    <div className="App">
      <IncButton diff={-1} val={cnt} setVal={setCnt} />
      {cnt}
      <IncButton diff={1} val={cnt} setVal={setCnt} />
      <div></div>
      <button onClick={()=>{setCnt(0);}}>reset</button>
    </div>
  );
}

export default App;
