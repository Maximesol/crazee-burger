import { useContext } from 'react'
import styled from 'styled-components';
import AdminContext from '../../../../../../contexts/AdminContext'
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton'
import { theme } from '../../../../../../theme/index';

export default function EmptyMenuAdmin({ }) {
    const { resetMenu } = useContext(AdminContext)
    return (
        <EmptyMenuAdminStyle>
            <span className='title'>Le Menu est Vide ?</span>
            <span className='description'>Cliquez ci-dessous pour le réinitialiser</span>
            <PrimaryButton
                label="Générer de nouveaux produits"
                onClick={resetMenu}
                version="default"
            />
        </EmptyMenuAdminStyle>
    )
}

const EmptyMenuAdminStyle = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }
  .title {
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.semiBold};
  }
  .description {
    font-size: ${theme.fonts.P4};
    margin-top: 20px;

  }

  button {
    margin-top: 20px;
    font-size: ${theme.fonts.XS};
    width: auto;
    height: 53px;
  }
`;
