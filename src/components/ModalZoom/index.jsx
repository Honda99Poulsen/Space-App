import styled from "styled-components"
import Imagen from "../Galeria/Imagen"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background-color: transparent;
    border: none;
    width: 1156px;
`
const FormEstilizado = styled.form`
    position: relative;
    top: -660px;
    left: 1000px;
    
`
const Boton = styled.button`
    background-color: transparent;
    border: none;
`

const ModalZoom = ({expandirFoto, alCerrar, setFavorito}) => {
    return(
        <>
            {expandirFoto && <>
                <Overlay />
                <DialogEstilizado open={!!expandirFoto} onClose={alCerrar}>
                        <Imagen expandida={true} foto={expandirFoto} setFavorito={setFavorito}/>
                        <FormEstilizado method="dialog">
                            <Boton ><img src="iconos/close.png" alt="Cerrar"/></Boton>
                        </FormEstilizado>
                    </DialogEstilizado>
            </>}
        </>
    )

}

export default ModalZoom