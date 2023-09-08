import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
                <div className='loginScreen_gradient'></div>
                <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>
            </div>
            <div className='loginScreen_body'>
                {signIn ? (
                    <SignInScreen />
                ): (<>
                    <h1>Unlimited files, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch. Enter your email to create or restart your membership.</h3>

                    <div class="loginScreen_input">
                        <form>
                            <input type="email" placeholder='Email Adress' required />

                            <button className='loginScreen_getStarted' type="submit" onClick={() => setSignIn(true)}>Get Started</button>
                        </form>
                    </div> 
                    </>)}

                
            </div>

        </div>
    )
}

export default LoginScreen