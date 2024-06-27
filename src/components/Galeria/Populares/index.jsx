import styled from "styled-components"
import Titulo from "../../Titulo"
import Imagen from "../Imagen"
import ImagenesPopulares from "../../ImagenesPopulares"

const PopularesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Div = styled.div`

`
const Section = styled.section`
    display: flex;
    flex-flow: column;
    width: 212px;
`

const Boton = styled.button`
    width: 208px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid var(--Degradado-co-rosa, #C98CF1);
    color: white;
    background: var(--Gradiente-fondo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
    font-size: 20px;
    font-weight: 700;
`

const Populares = (props) => {

    const {fotosPopulares} = props


    return (
        <Section>
            <Div>
                <Titulo $aling="center">Populares</Titulo>
            </Div>
             <PopularesContainer>
                {fotosPopulares.map( (popular) => {
                    return <ImagenesPopulares key={popular.id} foto={popular}/>
                } )}
                <Boton>Ver más</Boton>
            </PopularesContainer>
        </Section>
    )
}

export default Populares