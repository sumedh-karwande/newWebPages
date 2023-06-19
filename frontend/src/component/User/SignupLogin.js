
import react, { useEffect, useState } from 'react';

const LoginSignUp = () =>{
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    const onNameChange = e => setname(e.target.value);
    const onEmailChange = e => setemail(e.target.value);
    const onPasswordChange = e => setpassword(e.target.value);
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const data = { name, email ,password};
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch("http://localhost:4000/api/v1/register", requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
    };
  
    return (
        <div className="App">
          <form>
            <input  placeholder="name" value={name}
              onChange={onNameChange} required />
            <input placeholder="email" value={email}
              onChange={onEmailChange} required />
               <input  placeholder="passwordword" value={password}
              onChange={onPasswordChange} required />
            <button type="submit" onClick={handleSubmit}>
             Create Post
            </button>
          </form>
        </div>
    );
}
export default LoginSignUp;