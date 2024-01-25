import { useState } from "react";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [formDisabled, setFormDisabled] = useState(true);
  const maxAttempts = 3; // Set the maximum allowed attempts

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formDisabled === false) {
      return;
    }

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else if (
      userPassword === "fook" ||
      userPassword === "shite" ||
      userPassword === "bitch"
    ) {
      setSubmitResult("Password must not be any foul language");
    } else {
      setAttempts(attempts + 1);

      if (attempts < maxAttempts) {
        setSubmitResult("Successful login.");
      } else {
        setFormDisabled(false);
        setSubmitResult(
          `Maximum login attempts reached. Please try again later.`
        );
      }
    }
  };

  return (
    <div className="LoginForm componentBox">
      {formDisabled && (
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              Email Address:
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
          <div>Email in State: {userEmail}</div>
          <div>Password in State: {userPassword}</div>
          <button>Log In</button>
        </form>
      )}
      <p>{submitResult}</p>
    </div>
  );
}

export default LoginForm;
