import { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import Tab from '../../../../reusable-ui/Tab';

export default function AdminTabs({ isOpen, setIsOpen }) {
  //state
  const [isAddSelescted, setIsAddSelescted] = useState(true)
  const [isEditSelescted, setIsEditSelescted] = useState(false)



  //comportement

  const toggleAdd = () => {
    setIsOpen(true)
    setIsAddSelescted(!isAddSelescted)
    setIsEditSelescted(false)
  }

  const toggleEdit = () => {
    setIsOpen(true)
    setIsAddSelescted(false)
    setIsEditSelescted(!isEditSelescted)
  }


  //affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsOpen(!isOpen)}
        className={!isOpen ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={toggleAdd}
        className={isAddSelescted ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={toggleEdit}
        className={isEditSelescted ? "is-active" : ""}
      />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  
  display: flex;
  padding: 0 20px;

  .is-active{
border-radius: 5px 5px 0px 0px;
border-top: 1px solid #292729;
border-right: 1px solid #292729;
border-bottom: 2px solid #292729;
border-left: 1px solid #292729;
background: #292729;
box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
color:white;
  }

  button {
    margin-left: 1px;
  }
`;