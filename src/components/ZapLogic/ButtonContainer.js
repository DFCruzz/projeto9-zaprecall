import styled from "styled-components";

const ButtonContainer = styled.div`
    display: ${props => props.flipped ? "flex" : "none"};
    width: 100%;
    margin-top: 12px;
    justify-content: space-between;
`
export default ButtonContainer