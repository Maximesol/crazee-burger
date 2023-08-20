import { useContext } from 'react';
import styled from 'styled-components';
import AdminContext from '../../../../contexts/AdminContext';
import { theme } from '../../../../theme';
import Admin from './Admin/Admin';
import Menu from './Menu';


export default function Main() {

    //state
    const { isAdmin, setIsAdmin } = useContext(AdminContext)


    //comportements

    //affichage
    return (
        <MainStyled>
            {/* <div className='basket'>BASKET</div> */}
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
    ${'' /* grid-template-columns: 1fr; */}
    grid-template-columns: 1fr; 
     ${'' /* .basket{
        background: pink;
    } */}

    
    .menu-add-admin{
        
        position: relative;
        overflow-y: hidden;
        display: grid;
    }
    
`;