import { useState } from "react"
import GameContainer from "./GameContainer";
import GlobalStyles from "./GlobalStyles";
import Logo from "./Logo/Logo"
import ZapLogic from "./ZapLogic/ZapLogic";
import Footer from "./Footer/Footer";

export default function App() {

  const cards = [
    { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { id: 2, question: "O React é _____", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, question: "Componentes devem iniciar com _____", answer: "Letra maiúscula" },
    { id: 4, question: "Podemos colocar _____ dentro do JSX", answer: "expressões" },
    { id: 5, question: "O ReactDOM nos ajuda _____", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, question: "Usamos o npm para _____", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { id: 7, question: "Usamos props para _____", answer: "Passar diferentes informações para componentes" },
    { id: 8, question: "Usamos estado (state) para _____", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

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
          cards={cards}
        />
        <Footer
          setIsAnswered={setIsAnswered}
          isAnswered={isAnswered}
          cards={cards}
        />
      </GameContainer>
    </>
  )
}