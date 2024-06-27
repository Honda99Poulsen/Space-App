import styled from "styled-components"
import search from './search.png'

const Container = styled.div`
    display: inline-block;
    position: relative;
`

const InputTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`

const Imagen = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`

const InputTexto = () => {
    return (
        <Container>
        <InputTextoEstilizado type="text" placeholder="¿Qué estás buscando?"/>
        <Imagen src={search} alt="icon-search" />
        </Container>
    )
    
}

export default InputTexto