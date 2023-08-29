import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'

export const getinputTextsConfig = (newProduct) => [
    {
        name: "title",
        value: newProduct.title,
        placeholder: 'Nom du produit (ex: Super Burger)',
        Icon: <FaHamburger />,
        version: "minimalist",
    },
    {
        name: "imageSource",
        value: newProduct.imageSource,
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-prduit.png)",
        Icon: <BsFillCameraFill />,
        version: "minimalist",
    },
    {
        name: "price",
        value: newProduct.price,
        placeholder: 'Prix',
        Icon: <MdOutlineEuro />,
        version: "minimalist",
    },
]