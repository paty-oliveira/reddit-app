import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App /> spec', function () {

  it('Should render the title of the App', () => {
    const { container} = render(<App />);

    expect(container).toHaveTextContent("Reddit App")
  });

});
