import { useState } from "react"
import GameContainer from "./GameContainer";
import GlobalStyles from "./GlobalStyles";
import Logo from "./Logo"
import ZapLogic from "./ZapLogic/ZapLogic";

export default function App() {

  const [isFlipped, setIsFlipped] = useState([])
  const [isOpen, setIsOpen] = useState([])
  const [isAnswered, setIsAnswered] = useState([])
  const [zapAnswer, setZapAnswer] = useState([])
  const [maybeAnswer, setMayberAnswer] = useState([])
  const [wrongAnswer, setWrongAnswer] = useState([])


  return (
    <>
      <GlobalStyles />
      <GameContainer>
        <Logo />
        <ZapLogic
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </GameContainer>
    </>
  )
}