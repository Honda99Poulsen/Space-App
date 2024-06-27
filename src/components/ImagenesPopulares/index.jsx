import styled from "styled-components"

const Figure = styled.figure`
    width: 212px;
    height: 158px;
`
const Img = styled.img`
    width: 212px;
    height:158px;
    border-radius: 25px;
`

const ImagenesPopulares = ({foto}) => {
    return (
        <Figure id={`foto-${foto.id}`} >
            <Img src={foto.path} alt={foto.alt} />
            {console.log(foto.alt)}
        </Figure>
    )
}

export default ImagenesPopulares