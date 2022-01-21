import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

export default function NavBar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Exit</MyButton>
      <div className="navbar__links">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
}
