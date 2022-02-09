
import { render, screen } from '@testing-library/react'
import App from "./App";
import { EntryProvider } from "./context/EntryContext"
import { UserProvider } from "./context/UserContext"
import userEvent from '@testing-library/user-event'
test('input changes value, then button renders input', () => {
    render(
        <UserProvider>
            <EntryProvider>
                <App />
            </EntryProvider>
        </UserProvider>
    );

    const nameInput = screen.getByLabelText(/Name:/i);
    const messageInput= screen.getByLabelText(/Message/i);
    expect(nameInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    userEvent.type(nameInput, 'spencer');
    expect(nameInput.value).toBe('spencer');
    userEvent.type(messageInput, 'hello');
    expect(messageInput.value).toBe('hello');
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const name = screen.getByText('spencer');
    const message = screen.getByText('hello');

    expect(name).toBeInTheDocument();
    expect(message).toBeInTheDocument();

}) 