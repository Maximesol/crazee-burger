import { useContext } from 'react';
import styled from 'styled-components';
import AdminContext from '../../../../contexts/AdminContext';
import { theme } from '../../../../theme';
import Admin from './Admin/Admin';
import Menu from './Admin/Menu/Menu';
import Basket from './Basket/Basket';


export default function Main() {

    //state
    const { isAdmin } = useContext(AdminContext)


    //comportements

    //affichage
    return (
        <MainStyled>
            <Basket />
            <div className='menu-add-admin'>
                <Menu />
                {isAdmin && <Admin />}
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex:1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 25% 75%;
     

    
    .menu-add-admin{
        
        position: relative;
        overflow-y: hidden;
        display: grid;
    }
    
`;
