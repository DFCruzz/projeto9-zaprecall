import styled from "styled-components";

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

export default OpenCard