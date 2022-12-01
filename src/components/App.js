import { useState } from "react"
import GameContainer from "./GameContainer";
import GlobalStyles from "./GlobalStyles";
import Logo from "./Logo"
import ZapLogic from "./ZapLogic/ZapLogic";
import Footer from "./Footer";

export default function App() {

  const [isFlipped, setIsFlipped] = useState([])
  const [isOpen, setIsOpen] = useState([])
  const [isAnswered, setIsAnswered] = useState([])
  const [zapAnswer, setZapAnswer] = useState([])
  const [maybeAnswer, setMaybeAnswer] = useState([])
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
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          zapAnswer={zapAnswer}
          setZapAnswer={setZapAnswer}
          maybeAnswer={maybeAnswer}
          setMaybeAnswer={setMaybeAnswer}
          wrongAnswer={wrongAnswer}
          setWrongAnswer={setWrongAnswer}
        />
        <Footer
          setIsAnswered={setIsAnswered}
          isAnswered={isAnswered}
        />
      </GameContainer>
    </>
  )
}