import reducer, { postsSlice } from "./postsSlice";

describe("postsSlice reducer", () => {

    it('should return default state', function () {
        const currentState = reducer(undefined, {});
        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/"
        };

        expect(currentState).toEqual(expectedState)
    });


})