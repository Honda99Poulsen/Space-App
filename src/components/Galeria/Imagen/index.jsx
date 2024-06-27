import styled from "styled-components"
import BotonIcono from "../../BotonIcono"


////////////////////////////////////////////////////////////////////////////////

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '370px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Img = styled.img`
    width:24px;
    height: 24px;
    /* box-sizing: border-box; */
`

const Imagen = ({foto, expandida=false, alSolicitarZoom, setFavorito}) => {

    const IconoEstado = foto.favorito ?  "/iconos/favorite.png" : "/iconos/favorite_outline.png"

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`} >
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Pie>
                    <h4>{foto.fuente}</h4>
                    <BotonIcono onClick={ () => setFavorito(foto) }>
                        <Img src={IconoEstado} alt="favorito" />
                    </BotonIcono>
                    {!expandida && <BotonIcono onClick={ () => {alSolicitarZoom(foto)} } aria-hidden={expandida} >
                        <Img src="/iconos/open_in_full.png" alt="icono de expandir" />
                        </BotonIcono>}
                </Pie>
            </figcaption>
        </Figure>
    )
}

export default Imagen
