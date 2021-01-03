import './App.css';
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem';
import SpeicalButton from './SpeicalButton/SpeicalButton'
import Counter from './Counter/Counter';
import Toggle from './Toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem route="/"><img src={'..'} />Home</MenuItem>
        <MenuItem route="/about"><img src={'..'} />About</MenuItem>
      </Menu>
      <hr />
      <SpeicalButton />
      <hr />
      <Counter />
      <hr />
      <Toggle />
    </div>
  );
}

export default App;
