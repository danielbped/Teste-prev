import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import axios from 'axios';
import { Form, Main, Button, P, Warning } from '../../Style/Login';
import Logo from '../../Style/Logo';
import LogoSvg from '../../svg/Logo.svg';

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
      setTimeout(() => setWarning(''), 5000);
    }
  }

  return (
    <Main>
      <Form onSubmit={ handleSubmit }>
        <Logo src={ LogoSvg } data-testid="logo-login" />
        <Input
          type='text'
          placeholder='Digite seu email ou CPF'
          label='Email ou CPF'
          onChange={ handleLogin }
          name='username'
          dataTestId='username-input'
        />
        <Input
          type='password'
          placeholder='Digite sua senha'
          label='Senha'
          onChange={ handleLogin }
          name='password'
          dataTestId='password-input'
        />
        <P
          data-testid='lost-password'
        >
          Esqueceu a senha?
        </P>
        <Button
          type='submit'
          data-testid='login-button'
        >
          Entrar
        </Button>
        { warning && <Warning data-testid='warning'>{ warning }</Warning> }
      </Form>
    </Main>
  )
}

export default LoginForm;
