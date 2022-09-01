import reducer, { postsSlice, setSubredditSelected, selectSubredditUrl, fetchPostsFromSubreddit } from "./postsSlice";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

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


describe("fetchPostsFromSubreddit thunk", () =>{
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    it('should fire startGetPostsFromSubreddit and getPostsFromSubredditSuccess actions in case of success', function () {
        const expectedActions = ["posts/startGetPostsFromSubreddit", "posts/getPostsFromSubredditSuccess"];

        // Mock the store
        const store = mockStore({});

        const url = "/r/Home";

        // When fetchPostsFromSubreddit thunk is dispatched
        return store.dispatch(fetchPostsFromSubreddit(url))
            .then(() => {
                const actualActions = store.getActions()
                    .map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    });

    it('should fire getPostsFromSubredditFailure action in case of failure', function () {
        const expectedActions = ["posts/getPostsFromSubredditFailure"];

        // Mock the store
        const store = mockStore({});

        const url = "/r/Home";

        // When fetchPostsFromSubreddit thunk is dispatched
        return store.dispatch(fetchPostsFromSubreddit(url))
            .catch(() => {
                const actualActions = store.getActions()
                    .map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    });
})













