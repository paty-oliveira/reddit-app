import React from "react";
import { Subreddit } from "./Subreddit";
import {render, screen} from "@testing-library/react";

describe('<Subreddit />', ()=> {

    it('should pass title props', function () {
        render(<Subreddit title="Home" />);
        expect(screen.getByTestId('test-title-props')).toHaveTextContent('Home')
    });
})