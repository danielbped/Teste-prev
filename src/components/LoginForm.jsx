import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const handleLogin = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const POST_URL = 'http://localhost:8080/oauth';
      const { data: { access_token, token_type }  } = await axios.post(POST_URL, user);
      localStorage.setItem('token', `${token_type} ${access_token}`);
      navigate('/dashboard')
    } catch (error) {
      const { message } = await error.response.data;
      setWarning(message);
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        type='text'
        placeholder='Digite seu email ou CPF'
        label='Email ou CPF'
        onChange={ handleLogin }
        name='username'
      />
      <Input
        type='password'
        placeholder='Digite sua senha'
        label='Senha'
        onChange={ handleLogin }
        name='password'
      />
      <p>Esqueceu a senha?</p>
      <button
        type='submit'
      >
        Entrar
      </button>
      { warning && <p>{ warning }</p> }
    </form>
  )
}

export default LoginForm;
