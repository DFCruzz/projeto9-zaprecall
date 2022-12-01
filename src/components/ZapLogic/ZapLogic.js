import styled from "styled-components"
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
}) => {
    const redBtn = "#FF3030"
    const yellowBtn = "#FF922E"
    const greenBtn = "#2FBE34"

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
                            opened={isOpen.includes(a.id)}
                        >
                            <p
                                style={{color:
                                    zapAnswer.includes(a.id) ? "#2FBE34" :
                                    maybeAnswer.includes(a.id) ? "#FF922E" :
                                    wrongAnswer.includes(a.id) ? "#FF3030" : "#333333"
                                }}
                            >
                                Pergunta {a.id}
                            </p>
                            <img
                                onClick={isAnswered.includes(a.id) ? null : () => openCard(a)}
                                src={
                                    zapAnswer.includes(a.id) ? zapImg :
                                    maybeAnswer.includes(a.id) ? maybeImg :
                                    wrongAnswer.includes(a.id) ? wrongImg : playBtn
                                }
                            />
                        </ClosedCard>


                        <OpenCard opened={isOpen.includes(a.id)} flipped={isFlipped.includes(a.id)}>

                            {isFlipped.includes(a.id) ? a.answer : a.question}
                            <img src={flipBtn} onClick={() => flipCard(a)} />

                            <ButtonContainer flipped={isFlipped.includes(a.id)}>

                                <ChoiceButton value={1} color={redBtn} onClick={e => checkAnswer(e, a)}>Não Lembrei</ChoiceButton>
                                <ChoiceButton value={2} color={yellowBtn} onClick={e => checkAnswer(e, a)}>Quase não demorei</ChoiceButton>
                                <ChoiceButton value={3} color={greenBtn} onClick={e => checkAnswer(e, a)}>Zap!</ChoiceButton>
                                
                            </ButtonContainer>
                        </OpenCard>
                    </div>
                )}
            </ul>
        </>
    )
}

const ClosedCard = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.opened ? "none" : "flex"};
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
`
const OpenCard = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => props.opened ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;

    img {
        display: ${props => props.flipped ? "none" : "flex"};
        position: absolute;
        bottom: 10px;
        right: 10px;
    }    
`
const ButtonContainer = styled.div`
    display: ${props => props.flipped ? "flex" : "none"};
    width: 100%;
    margin-top: 12px;
    justify-content: space-between;
`
const ChoiceButton = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.color};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding:5px;
`

export default ZapLogic
