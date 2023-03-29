import React from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleGoogleSignup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle errors here.
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Sign up using Google</h2>
      <button onClick={handleGoogleSignup}>Sign up with Google</button>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default Signup;
