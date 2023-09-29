import { useContext } from 'react'
import styled from 'styled-components';
import Card from '../../../../../reusable-ui/Card';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import AdminContext from '../../../../../../contexts/AdminContext';
const COMING_SOON = "/public/images/coming-soon.png"
import { deepClone } from '../../../../../../utils/array';


export default function Menu() {
  // state

  const { menu, isAdmin, handleDelete, setProductSelected, productSelected, setIsOpen, setCurrentTab, titleEditRef, basket, setBasket } = useContext(AdminContext)
  //comportement
  const handleClick = async (idProductClicked) => {
    if (!isAdmin) return
    await setIsOpen(true)
    await setCurrentTab("edit")
    const productClickOn = menu.find(({ id }) => id === idProductClicked)
    await setProductSelected(productClickOn)
    titleEditRef.current.focus()

  }

  const checkIfProductIsClicked = (idProductClicked, idProductSelected) => {
    return idProductClicked === idProductSelected
  }

  const handleCardDelete = (event, id) => {
    event.stopPropagation(event)
    handleDelete(id)
    titleEditRef.current.focus()
    id === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddToBasket = (idProductToAdd, event) => {
    event.stopPropagation()
    const productToAdd = menu.find(({ id }) => id === idProductToAdd);
    const existingProductIndex = basket.findIndex(({ id }) => id === idProductToAdd);

    let newBasket;

    if (existingProductIndex !== -1) {
      newBasket = deepClone(basket);
      newBasket[existingProductIndex].quantity += 1;
      const [updatedProduct] = newBasket.splice(existingProductIndex, 1);
      newBasket = [updatedProduct, ...newBasket];
    } else {
      newBasket = [{ ...productToAdd, quantity: 1 }, ...basket];
    }

    setBasket(newBasket);
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
          onAddToBasket={(event) => handleAddToBasket(id, event)}
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