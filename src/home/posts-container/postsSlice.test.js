import reducer, { postsSlice, setSubredditSelected, selectSubredditUrl } from "./postsSlice";

describe("postsSlice reducer", () => {

    it('should return default state', function () {
        const currentState = reducer(undefined, {});
        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            error: false,
            isLoading: false
        };

        expect(currentState).toEqual(expectedState)
    });

    it('should update subredditSelected when a new subreddit is selected', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            error: false,
            isLoading: false
        };

        const payload = "r/pics/"

        const expectedState = {
            posts: [],
            subredditSelected: payload,
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, setSubredditSelected(payload))

        expect(actualState).toEqual(expectedState)
    });
})

describe("setSubredditSelected selector", () => {
    it('should return the subreddit URL from the store ', function () {
        const mockStoreState = {
            subreddits: {
                subreddits: [],
                error: false,
                isLoading: false,
            },
            posts: {
                posts: [],
                subredditSelected: "r/Home/",
                error: false,
                isLoading: false
            }
        };

        const expectedResult = "r/Home/";

        const actualResult = selectSubredditUrl(mockStoreState);

        expect(actualResult).toEqual(expectedResult);
    });
})
















