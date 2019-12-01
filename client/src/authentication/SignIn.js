import React from "react";
import { signInWithGoogle } from "../firebase/fireBaseUtils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="google-btn-container">
          <button onClick={signInWithGoogle} className="btn btn__google">
            Sign In With Google
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
