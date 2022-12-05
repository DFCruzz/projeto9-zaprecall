import FooterContainer from "./FooterContainer"


const Footer = ({isAnswered, cards}) => {

    return (
        <FooterContainer data-test="footer">
            {isAnswered.length}/{cards.length} Concluídos
        </FooterContainer>
    )
}

export default Footer