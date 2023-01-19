import logo from './logo.svg';
import './App.css';
import context from './Components/Context';
import LINK from './Components/LINK';
import MyContext from './Components/MyContext';
import Nav from './Components/NavBar';
import { useState } from 'react';
function App() {
    const [theme, setTheme] = useState(true);
  return (
    <div>
      <MyContext.Provider value={theme}>
        <LINK/>
    </MyContext.Provider>
    <context.Provider value={theme}>
    <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Nav />
    </context.Provider>
    
    </div>
  );
}

export default App;