import { useContext } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Tab from '../../../../reusable-ui/Tab';
import AdminContext from "../../../../../contexts/AdminContext.jsx"
import { getTabsConfig } from './getTabsConfig';

export default function AdminTabs() {
  //state

  const {
    currentTab,
    setCurrentTab,
    isOpen,
    setIsOpen, } = useContext(AdminContext)


  //comportement

  const selectTab = (tabSelected) => {
    setIsOpen(true)
    setCurrentTab(tabSelected)
  }

  const tabs = getTabsConfig(currentTab)


  //affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsOpen(!isOpen)}
        className={!isOpen ? "is-active" : ""}
      />

      {tabs.map((tab) => (

        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTab === tab.index ? "is-active" : ""}
        />

      ))}

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