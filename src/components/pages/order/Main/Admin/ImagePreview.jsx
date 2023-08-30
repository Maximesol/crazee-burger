import { useContext } from 'react'
import { styled } from 'styled-components'
import AdminContext from '../../../../../contexts/AdminContext'
import { theme } from '../../../../../theme'


export default function ImagePreview() {

    //state
    const { newProduct } = useContext(AdminContext)

    //comportement

    //affichage
    return (
        <ImagePreviewStyled >
            {newProduct.imageSource ?
                <img className='preview' src={newProduct.imageSource || ""} alt="Product" /> :
                <div className='empty-image'>Aucune image</div>}
        </ImagePreviewStyled>
    )
}
const ImagePreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display:flex;
    justify-content: center;
    align-items:center;

    .preview {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

    .empty-image{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};

}
    

`;
