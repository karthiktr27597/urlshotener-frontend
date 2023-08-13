import React, { useReducer } from 'react'
import Inputtag from '../Inputtag'
import Button from '../Button'
import { passwordresetVerifyApi } from '../Api'
import { useNavigate, useParams } from 'react-router-dom'

const reducer = (state, action) => {
    switch (action.type) {
        case "ONCHANGE":
            return {
                ...state,
                [action.field]: action.payload
            }
        default:
            return state
    }
}

function Passwordreset() {

    const { rtoken } = useParams()
    const { email } = useParams()

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, { newpassword: "", confirmpassword: "" })

    const handleTyping = (e) => {
        e.preventDefault();
        dispatch({ type: "ONCHANGE", field: e.target.inputname, payload: e.target.value })
    }

    const handlePasswordreset = async (e) => {
        try {
            e.preventDefault();
            console.log(rtoken, email);
            const response = await passwordresetVerifyApi(rtoken, email, state);
            console.log(response);
            alert("Password reseted successfully")
            navigate("/urlshortener")

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <form className='form' onSubmit={(e) => handlePasswordreset(e)}>
            <div className='container'>
                <Inputtag type={"password"} placeholder={"enter new password"} name={"New Password"} inputname={"newpassword"} onChange={(e) => handleTyping(e)} />
                <Inputtag type={"password"} placeholder={"enter confirm password"} name={"Confirm Password"} inputname={"confirmpassword"} onChange={(e) => handleTyping(e)} />
                <Button type={"submit"} name={"Update and Login"} />
            </div>
        </form>
    )
}

export default Passwordreset