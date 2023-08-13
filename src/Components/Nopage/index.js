import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

function Nopage() {

    const navigate = useNavigate();

    const pageError = () => {
        navigate("/urlshortener");
    }

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <Button type={"submit"} name={"Home"} onClick={pageError} />
        </div>
    )
}

export default Nopage