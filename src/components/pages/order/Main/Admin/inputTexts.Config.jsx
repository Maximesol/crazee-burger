import { FaHamburger } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'
import { MdOutlineEuro } from 'react-icons/md'

export const getinputTextsConfig = (product) => [
    {
        id: "0",
        name: "title",
        value: product.title,
        placeholder: 'Nom du produit (ex: Super Burger)',
        Icon: <FaHamburger />,
        version: "minimalist",
    },
    {
        id: "1",
        name: "imageSource",
        value: product.imageSource,
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-prduit.png)",
        Icon: <BsFillCameraFill />,
        version: "minimalist",
    },
    {
        id: "2",
        name: "price",
        value: product.price,
        placeholder: 'Prix',
        Icon: <MdOutlineEuro />,
        version: "minimalist",
    },
]