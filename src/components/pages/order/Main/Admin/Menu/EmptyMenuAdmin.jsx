import { useContext } from 'react'
import AdminContext from '../../../../../../contexts/AdminContext'
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton'

export default function EmptyMenuAdmin({ }) {
    const { resetMenu } = useContext(AdminContext)
    return (
        <div>
            <span>Le Menu est Vide ?</span>
            <span>Cliquez ci-dessous pour le réinitialiser</span>
            <PrimaryButton
                label="Générer de nouveaux produits"
                onClick={resetMenu}
            />
        </div>
    )
}
