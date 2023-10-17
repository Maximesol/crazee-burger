import { useContext } from 'react'
import styled from 'styled-components';
import Card from '../../../../../reusable-ui/Card';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import AdminContext from '../../../../../../contexts/AdminContext';
import Loader from './Loader';
const COMING_SOON = "/public/images/coming-soon.png"

export default function Menu() {
  // state

  const {
    username,
    menu,
    resetMenu,
    isAdmin,
    handleDelete,
    setProductSelected,
    productSelected,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected
  } = useContext(AdminContext)


  //comportement


  const checkIfProductIsClicked = (idProductClicked, idProductSelected) => {
    return idProductClicked === idProductSelected
  }

  const handleCardDelete = (event, id,) => {
    event.stopPropagation(event)
    handleDelete(id, username)
    handleDeleteBasketProduct(id)
    id === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddToButton = (idProductToAdd, event) => {
    event.stopPropagation()
    const productToAdd = menu.find(({ id }) => id === idProductToAdd);
    handleAddToBasket(productToAdd)

  }


  // affichage
  if (menu == undefined) {
    return <Loader />
  }

  if (menu.length === 0) {
    if (isAdmin) return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
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
          onClick={isAdmin ? () => handleProductSelected(id) : null}
          isHoverable={isAdmin}
          hasDeleteButton={isAdmin}
          onAddToBasket={(event) => handleAddToButton(id, event)}
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