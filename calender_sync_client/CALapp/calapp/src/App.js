import "./App.css";
import { GoogleLogin } from "react-google-login";
// import axios from "axios";

function App() {
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   const { code } = response;
  //   axios
  //     .post("/api/create-tokens", { code })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error.message));
  // };
  // const responseError = (error) => {
  //   console.log(error);
  //   // alert("There was an error signing in. Please try again.");
  // };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <div className="App">
        <h1>Google calendar api</h1>
        {/* <input type="datetime-local" id="startDateTime"></input> */}
      </div>
      <div>
        <GoogleLogin
          clientId="343004182927-9591rbm95rlind7uu2175ku9dcluchrn.apps.googleusercontent.com"
          buttonText="Sign In & Authorize Calendar"
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={"single_host_origin"}
          //important below
          responseType="code"
          accessType="offline"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
          // redirectUri="http://localhost:3000"
          // prompt="consent"
        />
      </div>
    </div>
  );
}

export default App;
