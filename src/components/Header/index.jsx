import styled from "styled-components"
import InputTexto from "../InputTexto"

const HeaderEstilizado = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 0;
    img{
        width: 210px;
    }
`

const Header = () => {
    return <HeaderEstilizado>
                <img src="img/Logobranco.png" alt="logo space-app" />
                <InputTexto/>
           </HeaderEstilizado>
}

export default Header