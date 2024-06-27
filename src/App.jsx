import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles/GlobalStyle"
import Header from "./components/Header"
import MenuLateral from "./components/MenuLateral/MenuLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import populares from './fotos-populares.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"


const BackgroundGradiente = styled.div`

    width: 100%;
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `
  const AppContainer = styled.div`
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
  `
  const MainContainer = styled.main`
    display: flex;
    gap: 24px;
  `
  const ContenidoGaleria = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `

const App = () => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotosPopulares, setFotosPopulares] = useState(populares)
  const [expandirFoto, setExpandirFoto] = useState(null)

  const alternarFavorito = (foto) => {

    if(foto.id === expandirFoto?.id){
      setExpandirFoto({
        ...expandirFoto,
        favorito: !foto.favorito

      })
    }
      
    setFotosDeGaleria( fotosDeGaleria.map( fotoDeGaleria => {
      return{
        ...fotoDeGaleria,
        favorito: fotoDeGaleria.id === foto.id ? !foto.favorito : fotoDeGaleria.favorito
      }
    } ) )
    
  }

  return (
    <>
      <BackgroundGradiente>
      <GlobalStyle/>
      <AppContainer>
        <Header/>
        <MainContainer>
          <MenuLateral/>
          <ContenidoGaleria>
            <Banner texto="La galería más completa del espacio" backgroundImage={"img/Wallpaper.png"}/>
            <Galeria fotos={fotosDeGaleria} alSeleccionarFoto={ foto => {
              setExpandirFoto(foto) }} fotosPopulares={fotosPopulares} setFavorito={alternarFavorito}/>
            </ContenidoGaleria>
        </MainContainer>
        </AppContainer>
        <ModalZoom  expandirFoto={expandirFoto} alCerrar={ () => setExpandirFoto(null) } setFavorito={alternarFavorito}/>
      </BackgroundGradiente>
    </>
  )
}

export default App
