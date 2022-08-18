import App from './App';
import { render, screen } from '@testing-library/react';
import React from "react";

describe('<App />', () => {

  beforeEach(() => render(<App />))

  it('renders Header component', function () {

    expect(screen.getByText('Reddit')).toBeInTheDocument();
  });
});
