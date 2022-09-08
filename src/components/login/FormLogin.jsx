import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './styles/FormLogin.css'

const FormLogin = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios.post(URL, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => console.log(err));
  };

  // reset({
  //     email:'',
  //     password:''
  // })

  //Here I do  not use the hook useEffect because I am executing the axios inside of a function. Thus the only way to excute it is clicking login.
  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <h2 className="login__title">
        Welcome!<br/> Enter your email and password to continue
        </h2>
      <div className="login__form-login login__form-login--email">
        <label className="login__label" htmlFor="email">
          Email 
        </label>
        <input
          {...register("email")}
          className="login__input"
          type="email"
          id="email"
        />
      </div>
      <div className="login__form-login login__form-login--password">
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          className="login__input"
          type="password"
          id="password"
        />
      </div>
      <button className="login__btn">Login</button>
    </form>
  );
};

export default FormLogin;
