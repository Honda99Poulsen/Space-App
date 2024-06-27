import styled from "styled-components"

const ItemEstilizado = styled.li`
    color: ${props =>  props.$activo ? "#7B78E5" : "#D9D9D9"} ;
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    gap: 16px;
`

const ItemNavegacion = ({children, imagenActiva, ImagenDesactivada, activo=false}) => {
    return (
        <ItemEstilizado $activo={activo}>
        <img src={activo ? imagenActiva : ImagenDesactivada} alt="Home-icon" />
        {children}
        </ItemEstilizado>
    )
}

export default ItemNavegacion