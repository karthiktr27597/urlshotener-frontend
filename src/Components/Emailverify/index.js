import React, { useState } from 'react'
import Inputtag from '../Inputtag'
import Button from '../Button'
import { emailVerifyApi, forgotPasswordApi } from '../Api';
import "./emailverify.css";

function Emailverify() {
    const [email, setEmail] = useState("");
    const [disable, setDisable] = useState(true);


    const handleClick = async (e) => {
        try {
            e.preventDefault();
            const response = await emailVerifyApi({ email });
            console.log(response);
            setDisable(false);
            alert("Email verified successfully")
        } catch (err) {
            console.log(err);
            setDisable(true);
            alert("Invalid email")
        }
    }

    const handleForgotPassword = async (e) => {
        try {
            e.preventDefault();
            const response = await forgotPasswordApi({ email });
            console.log(response)
            alert("Mail sent: Pleace check your mail for password reset");
            setDisable(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className='form'>
            <div className='emailverify'>
                <Inputtag type={"email"} placeholder={"type email and click verify..."} name={"Email address"} onChange={(e) => { setEmail(e.target.value) }} />
                <Button type={"submit"} name={"Click for Verify"} onClick={handleClick} />
            </div>
            <button className="reset" type={"submit"} disabled={disable} onClick={(e) => handleForgotPassword(e)}>Reset Password</button>
        </form>
    )
}

export default Emailverify