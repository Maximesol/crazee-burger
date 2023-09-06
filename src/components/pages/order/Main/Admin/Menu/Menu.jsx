import { useContext } from 'react'
import styled from 'styled-components';
import AdminContext from '../../../../../../contexts/AdminContext';
import Card from '../../../../../reusable-ui/Card';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const COMING_SOON = "/public/images/coming-soon.png"


export default function Menu() {
  // state

  const { menu, isAdmin, handleDelete, setProductSelected, productSelected } = useContext(AdminContext)

  //comportement
  const handleClick = (idProductClicked) => {
    const productClickOn = menu.find(({ id }) => id === idProductClicked)
    setProductSelected(productClickOn)
  }

  const checkIfProductIsClicked = (idProductClicked, idProductSelected) => {
    return idProductClicked === idProductSelected
  }

  const handleCardDelete = (event, id) => {
    event.stopPropagation(event)
    handleDelete(id)
  }

  // affichage
  if (menu.length === 0) {
    if (isAdmin) return <EmptyMenuAdmin />
    return <EmptyMenuClient />
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return <Card
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : COMING_SOON}
          price={price}
          onDelete={(event) => handleCardDelete(event, id)}
          onClick={() => handleClick(id)}
          isHoverable={isAdmin}
          hasDeleteButton={isAdmin}
          isSelected={checkIfProductIsClicked(id, productSelected.id)}
        ></Card>
      })}

    </MenuStyled>
  )
}


const MenuStyled = styled.div`
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 50px 150px;
  justify-items: center;
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  
`;