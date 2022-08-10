import App from './App';
import {create} from 'react-test-renderer';

describe('<App />', () => {

  it('should match with snapshot', function () {
    const app = create(<App />)
    expect(app.toJSON()).toMatchSnapshot()
  });
});
