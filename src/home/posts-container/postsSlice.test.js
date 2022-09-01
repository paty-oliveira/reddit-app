import reducer, { postsSlice, setSubredditSelected } from "./postsSlice";

describe("postsSlice reducer", () => {

    it('should return default state', function () {
        const currentState = reducer(undefined, {});
        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            error: false,
            loading: false
        };

        expect(currentState).toEqual(expectedState)
    });

    it('should update subredditSelected when a new subreddit is selected', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            error: false,
            loading: false
        };

        const payload = "r/pics/"

        const expectedState = {
            posts: [],
            subredditSelected: payload,
            error: false,
            loading: false
        };

        const actualState = reducer(initialState, setSubredditSelected(payload))

        expect(actualState).toEqual(expectedState)
    });
})