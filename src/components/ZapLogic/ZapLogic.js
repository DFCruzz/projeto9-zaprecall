import styled from "styled-components"
import ClosedCard from "./ClosedCard"
import OpenCard from "./OpenCard"
import ButtonContainer from "./ButtonContainer"
import ChoiceButton from "./ChoiceButton"
import playBtn from "../../assets/img/seta_play.png"
import flipBtn from "../../assets/img/seta_virar.png"
import zapImg from "../../assets/img/icone_certo.png"
import maybeImg from "../../assets/img/icone_quase.png"
import wrongImg from "../../assets/img/icone_erro.png"

const ZapLogic = ({
    isFlipped,
    setIsFlipped,
    isOpen,
    setIsOpen,
    zapAnswer,
    setZapAnswer,
    maybeAnswer,
    setMaybeAnswer,
    wrongAnswer,
    setWrongAnswer,
    isAnswered,
    setIsAnswered,
    cards,
}) => {
    const redBtn = "#FF3030"
    const yellowBtn = "#FF922E"
    const greenBtn = "#2FBE34"

    function flipCard(e) {
        console.log(e.id)
        setIsFlipped([...isFlipped, e.id])
    }

    function openCard(e) {
        setIsOpen([...isOpen, e.id])
    }

    function checkAnswer(e, arr) {
        console.log(e.target.value)

        if(e.target.value == 3) {
            setZapAnswer([...zapAnswer, arr.id ])
            console.log(zapAnswer)
        }
        else if(e.target.value == 2) {
            setMaybeAnswer([...maybeAnswer, arr.id ])
            console.log(maybeAnswer)
        }
        else if(e.target.value == 1) {
            setWrongAnswer([...wrongAnswer, arr.id ])
            console.log(wrongAnswer)
        }
        setIsAnswered([...isAnswered, arr.id])
        setIsOpen([])
    }

    return (
        <>
            <ul>
                {cards.map(a =>
                    <div key={a.id}>
                        <ClosedCard                            
                            data-test="flashcard"
                            opened={isOpen.includes(a.id)}
                        >
                            <p
                                data-test="flashcard-text"
                                style={{color:
                                    zapAnswer.includes(a.id) ? "#2FBE34" :
                                    maybeAnswer.includes(a.id) ? "#FF922E" :
                                    wrongAnswer.includes(a.id) ? "#FF3030" : "#333333"
                                }}
                            >
                                Pergunta {a.id}
                            </p>
                            <img
                                data-test="play-btn"
                                onClick={isAnswered.includes(a.id) ? null : () => openCard(a)}
                                src={
                                    zapAnswer.includes(a.id) ? zapImg :
                                    maybeAnswer.includes(a.id) ? maybeImg :
                                    wrongAnswer.includes(a.id) ? wrongImg : playBtn
                                }
                            />
                        </ClosedCard>


                        <OpenCard data-test="flashcard-text" opened={isOpen.includes(a.id)} flipped={isFlipped.includes(a.id)}>

                            {isFlipped.includes(a.id) ? a.answer : a.question}
                            <img data-test="turn-btn" src={flipBtn} onClick={() => flipCard(a)} />

                            <ButtonContainer flipped={isFlipped.includes(a.id)}>

                                <ChoiceButton data-test="no-btn" value={1} color={redBtn} onClick={e => checkAnswer(e, a)}>Não Lembrei</ChoiceButton>
                                <ChoiceButton data-test="partial-btn" value={2} color={yellowBtn} onClick={e => checkAnswer(e, a)}>Quase não demorei</ChoiceButton>
                                <ChoiceButton data-test="zap-btn" value={3} color={greenBtn} onClick={e => checkAnswer(e, a)}>Zap!</ChoiceButton>
                                
                            </ButtonContainer>
                        </OpenCard>
                    </div>
                )}
            </ul>
        </>
    )
}

export default ZapLogic
