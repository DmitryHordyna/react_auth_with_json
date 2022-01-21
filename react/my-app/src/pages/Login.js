import React, { useContext } from 'react';
import MyButton from '../component/UI/button/MyButton';
import MyInput from '../component/UI/input/MyInput';
import { AuthContext } from '../context';

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButton>Enter </MyButton>
      </form>
    </div>
  );
}
