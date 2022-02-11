import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../pages/Dashboard';
import { LocalStorageMock } from '@react-mock/localstorage';
import UserProvider from '../context/UserProvider';

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiY29udGEiOnsiYXRpdm8iOnRydWUsInByaXZpbGVnaW8iOiJQUk9QUklFVEFSSU8iLCJub21lIjoiSm9uIFNub3cgRnJvbnRlbmQiLCJ1dWlkIjoiYmM2ZmNmN2ItOWM5MS00M2UzLTlkZDItMDRhMWNkYzYwZWZjIiwiZW1haWwiOiJqb25zbm93QG5pZ2h0c3dhdGNoLmNvbSIsInVybEltYWdlbVBlcmZpbCI6Imh0dHBzOi8vdGhpc3BlcnNvbmRvZXNub3RleGlzdC5jb20vaW1hZ2UiLCJtb2R1bG9zIjpbIkNMSUVOVEVTIiwiQ0FMQ1VMT1MiLCJQRVRJQ09FUyIsIkNBU09TIl19fQ.bujf96f-aOtVA9MqiYfpNsxBUgrt8zQl9ie4m16ZBxc';

const renderComponent = () => 
  render(
    <LocalStorageMock items={{ token: TOKEN }}>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </LocalStorageMock>
  );

describe('Testa se a página de Petições', () => {
  it('Possui o logo da empresa no header', () => {
    renderComponent();
    const logoHeader = screen.getByTestId('logo-header');
    expect(logoHeader).toHaveAttribute('src', 'Logo.svg');
  });

  it('Possui a imagem do usuário no header', () => {
    renderComponent();
    const profilePicture = screen.getByTestId('profile-picture');
    expect(profilePicture).toHaveAttribute('alt', 'Foto de Jon Snow Frontend')
  });

  it('Possui 4 cards de modulos', async () => {
    renderComponent();
    const infoCards = await screen.findAllByTestId('card-info');
    expect(infoCards.length).toBe(4);
  });

  it('Possui um campo com o título "Últimas petições"', () => {
    renderComponent();
    const dashboardTitle = screen.getByTestId('dashboard-title');
    expect(dashboardTitle).toHaveTextContent('Últimas petições');
  });

  it('Possui dois cards de petições', async () => {
    renderComponent();
    const petitionCards = await screen.findAllByTestId('petition-card');
    expect(petitionCards.length).toBe(2);
  });
});