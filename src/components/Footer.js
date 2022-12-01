import styled from "styled-components";


const Footer = ({isAnswered, setIs}) => {

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
        <FooterContainer>
            {isAnswered.length}/{cards.length} Concluídos
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

export default Footer