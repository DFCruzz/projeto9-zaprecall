import styled from "styled-components"

const ZapLogic = ({ props }) => {
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



    return (
        <>
            <ClosedCard>
                {cards.map(a => 
                    <li>
                        Pergunta {a.id}
                    </li>                
                )}
            </ClosedCard>
            <OpenCard>
                {cards.map(a =>
                    <li>{a.question}
                        <ButtonContainer>
                            <ChoiceButton disabled={null} color={redBtn}>Não Lembrei</ChoiceButton>
                            <ChoiceButton disabled={null} color={yellowBtn}>Quase não demorei</ChoiceButton>
                            <ChoiceButton disabled={null} color={greenBtn}>Zap!</ChoiceButton>
                        </ButtonContainer>
                    </li>
                )}
            </OpenCard>
        </>
    )
}

const ClosedCard = styled.ul`
    li {
        width: 300px;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const OpenCard = styled.ul`
    li {
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }    
`

const ButtonContainer = styled.div`
    display: ${props => props.disabled ? "none" : "flex"};
    width: 100%;
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
