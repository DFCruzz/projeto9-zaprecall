
import logo from "../../assets/img/logo.png"
import LogoContainer from "./LogoContainer"

const Logo = () => {
    return (
        <LogoContainer>
            <img src={logo} />
            <h1>
                ZapRecall
            </h1>
        </LogoContainer>
    )
}

export default Logo

