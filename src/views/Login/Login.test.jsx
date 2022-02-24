

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Login from './Login';

test('render the Login', () => {
  const container = render(
  <MemoryRouter>

  <UserProvider>

      <Login />
  </UserProvider>
  </MemoryRouter>
  );

    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole('button', {
        name: /login/i
      })
    expect(loginButton).toBeInTheDocument()


  expect(container).toMatchSnapshot();

});