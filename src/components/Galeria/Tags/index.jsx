import styled from "styled-components"
import tags from "./tags.json"

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
`

const Tag = styled.button`
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.30);
    color: #FFF;
    font-size: 24px;
    font-weight: 400;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;

    &:hover{
        border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: end;
    gap: 24px;
`

const Tags = () => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags: </TagTitulo>
            <Div>
                {tags.map(tag => {
                    return <Tag key={tag.id} >{tag.titulo}</Tag>
                })}
            </Div>
        </TagsContainer>
    )
}

export default Tags