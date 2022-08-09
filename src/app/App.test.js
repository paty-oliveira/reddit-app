import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App /> spec', function () {

  it('renders the component', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot()
  });

});
