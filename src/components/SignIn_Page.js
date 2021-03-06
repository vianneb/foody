import React from 'react';
import { Navigate } from 'react-router-dom';


//imports for user auth
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, } from 'firebase/auth';

const FIREBASEUI_CONFIG_OBJ = {

    //sign in options to show
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true}
    ],

    signInFlow: 'popup',
    
    callbacks: {
        //what do I do after I successfully sign in? don't redirect
        signInSuccessWithAuthResult: () => false
    },

    credentialHelper: 'none'
}


export function SignInPage(props) {

    const auth = getAuth(); //firebase authenticator

    //if user is logged, redirect from sign in page to home page
    if(props.currentUser.uid) {
        return <Navigate to="/home" />
    }

    return (
        <div className="main-body">
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} className="signin-card" />
        </div>
    )

}
