import {render, screen} from '@testing-library/react';
import App from './App';
import axios from "axios";

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Users management system/i);
    expect(linkElement).toBeInTheDocument();
});
