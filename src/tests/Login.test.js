import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Testa se a tela de login', () => {
  it('Possui o logo da empresa', () => {
    render(<App />);
    const logo = screen.getByTestId('logo-login');
    expect(logo).toHaveAttribute('src', 'Logo.svg');
  });

  it('Possui um input de username', () => {
    render(<App />);
    const usernameInput = screen.getByTestId('username-input');
    expect(usernameInput).toHaveAttribute('placeholder', 'Digite seu email ou CPF');
  });

  it('Possui um label para o campo de username', () => {
    render(<App />);
    const usernameInputLabel = screen.getByTestId('username-input-label');
    expect(usernameInputLabel).toHaveTextContent('Email ou CPF');
  });

  it('Possui um input de senha', () => {
    render(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('placeholder', 'Digite sua senha');
  });

  it('Possui um label para o campo de senha', () => {
    render(<App />);
    const passwordInputLabel = screen.getByTestId('password-input-label');
    expect(passwordInputLabel).toHaveTextContent('Senha');
  });

  it('Possui o campo de "Esqueceu a senha?"', () => {
    render(<App />);
    const lostPassword = screen.getByTestId('lost-password');
    expect(lostPassword).toHaveTextContent('Esqueceu a senha?');
  });

  it('Possui um botão de login', () => {
    render(<App />);
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toHaveTextContent('Entrar');
  });

  it('Mostra uma mensagem de erro, caso as credenciais sejam inválidas', async () => {
    render(<App />);
    
    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-button');
    
    userEvent.type(usernameInput, 'teste');
    userEvent.type(passwordInput, 'backend');
    userEvent.click(loginButton);
    
    const warningMessage = await screen.findByTestId('warning');
    expect(warningMessage).toHaveTextContent('Usuário ou senha inválidos');
  });
});