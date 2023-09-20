import { useState } from 'react'

export const useSuccessMessage = () => {

    // state
    const [productAdded, setProductAdded] = useState(false)

    //comportements

    const handleSuccessMessage = () => {
        setProductAdded(true)
        setTimeout(() => {
            setProductAdded(false)
        }, 2000)
    }

    return { productAdded, handleSuccessMessage }

}