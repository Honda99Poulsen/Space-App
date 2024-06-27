import styled from "styled-components"
import Titulo from "../Titulo"
import Tag from "./Tags"
import Populares from "./Populares"
import Imagen from "./Imagen"
import ModalZoom from "../ModalZoom"
import ImagenesPopulares from "../ImagenesPopulares"


const Container = styled.section`
    display: flex;
    flex-direction: column;
`
const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SeccionFluida = styled.section`
    flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    gap: 24px;
`


const Galeria = ({fotos=[], alSeleccionarFoto, fotosPopulares=[], setFavorito}) => {
    return (
        <Container>
            <Tag/>
            <GaleriaContainer>
                <SeccionFluida>
                <Titulo>Navegue por la galeria</Titulo>
                    <ImagenesContainer>
                    {fotos.map( foto => {
                        return <Imagen alSolicitarZoom={alSeleccionarFoto} key={foto.id} foto={foto} setFavorito={setFavorito}/>
                    })}
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares fotosPopulares={fotosPopulares}/>
            </GaleriaContainer>
           
        </Container>
         
    )
}

export default Galeria