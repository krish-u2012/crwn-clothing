import {
  signInWithGooglePopup,
  createUserDocumnetFromAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1>signIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
