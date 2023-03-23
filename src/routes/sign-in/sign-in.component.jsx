/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumnetFromAuth
  // signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  /* useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      // console.log(response);
      if (response) {
        const userDocRef = await createUserDocumnetFromAuth(response.user);
      }
    },
    []
  ); */

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    // console.log(response);
  };

  /* const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    // const userDocRef = await createUserDocumnetFromAuth(user);
    console.log({ user });
  }; */

  return (
    <div>
      <h1>signIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
    /* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */
  );
};

export default SignIn;
