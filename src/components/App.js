import { useState } from "react"
import GameContainer from "./GameContainer";
import GlobalStyles from "./GlobalStyles";
import Logo from "./Logo"
import ZapLogic from "./ZapLogic/ZapLogic";


function App() {
  return (
    <>
      <GlobalStyles />
      <GameContainer>
        <Logo />
        <ZapLogic />
      </GameContainer>
    </>
  );
}

export default App;
