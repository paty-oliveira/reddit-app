import App from './App';
import { render, screen } from '@testing-library/react';
import React from "react";

describe('<App />', () => {

  it('should have a div with App class', function () {
    const { container } = render(<App />);

    const expectedResult = 1;
    const actualResult = container.getElementsByClassName('App').length;

    expect(actualResult).toBe(expectedResult);
  });

  it('should renders Header component', function () {
    render(<App />);

    expect(screen.getByText('Reddit')).toBeInTheDocument();
  });

  it('should renders SubredditCategory component', function () {
    render(<App />);

    expect(screen.getByText('Subreddits')).toBeInTheDocument();
  });

});
