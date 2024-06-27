import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"

const UlEstilizado = styled.ul`
    margin: 0;
    padding: 0;
    color: white;
    list-style: none;
`

const MenuLateral = () => {

    return (
        <aside>
            <nav>
                <UlEstilizado>
                    <ItemNavegacion imagenActiva='icons/Home-Activo.png' ImagenDesactivada='icons/Home-Inactivo' activo={true}>Inicio</ItemNavegacion>
                    <ItemNavegacion imagenActiva='icons/MasVistas-Activo.png' ImagenDesactivada='icons/MasVistas-Inactivo.png'  >Más Vistos</ItemNavegacion>
                    <ItemNavegacion imagenActiva='icons/MasMeGusta-Activo.png' ImagenDesactivada='icons/MasMeGusta-Inactivo.png' >Más Me Gusta</ItemNavegacion>
                    <ItemNavegacion imagenActiva='icons/Nuevas-Activo.png' ImagenDesactivada='icons/Nuevas-Inactivo.png' >Nuevas</ItemNavegacion>
                    <ItemNavegacion imagenActiva='icons/Sorprendeme-Activo.png' ImagenDesactivada='icons/Sorprendeme-Inactivo.png' >Sorpréndame</ItemNavegacion>
                </UlEstilizado>
            </nav>
        </aside>
    )

}

export default MenuLateral