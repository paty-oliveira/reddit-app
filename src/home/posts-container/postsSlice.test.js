import reducer, {
    setSubredditSelected,
    selectSubredditUrl,
    fetchPostsFromSubreddit,
    startGetPostsFromSubreddit,
    getPostsFromSubredditSuccess,
    getPostsFromSubredditFailure,
    selectPostsFromSubreddit,
    setSearchTerm,
    selectSearchTerm
} from "./postsSlice";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

describe("postsSlice reducer", () => {

    it('should return default state', function () {
        const currentState = reducer(undefined, {});
        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        expect(currentState).toEqual(expectedState)
    });

    it('should update subredditSelected when a new subreddit is selected', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const payload = "r/pics/"

        const expectedState = {
            posts: [],
            subredditSelected: payload,
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, setSubredditSelected(payload))

        expect(actualState).toEqual(expectedState)
    });

    it('should update state when fetchPostsFromSubreddit call starts', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: true
        };

        const actualState = reducer(initialState, startGetPostsFromSubreddit);

        expect(actualState).toEqual(expectedState)
    });

    it('should update the state when fetchPostsFromSubreddit is successfully', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const payloadFromApi = [
            {
                "post": "example",
                "body": "This is my test post"
            }
        ]

        const expectedState = {
            posts: payloadFromApi,
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, getPostsFromSubredditSuccess(payloadFromApi));

        expect(actualState).toEqual(expectedState);
    });

    it('should update state when fetchPostsFromSubreddit fails', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: true,
            isLoading: false
        };

        const actualState = reducer(initialState, getPostsFromSubredditFailure);

        expect(actualState).toEqual(expectedState);
    });

    it('should update searchTerm when setSearchTerm is triggered', function () {
        const initialState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: "",
            error: false,
            isLoading: false
        };

        const newSearchTerm = "Posts from doors"

        const expectedState = {
            posts: [],
            subredditSelected: "r/Home/",
            searchTerm: newSearchTerm,
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, setSearchTerm(newSearchTerm));

        expect(actualState).toEqual(expectedState);
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
                searchTerm: "",
                error: false,
                isLoading: false
            }
        };

        const expectedResult = "r/Home/";

        const actualResult = selectSubredditUrl(mockStoreState);

        expect(actualResult).toEqual(expectedResult);
    });
})

describe("selectPostsFromSubreddit selector", () => {

    it('should return the posts from the store', function () {
        const mockStoreState = {
            subreddits: {
                subreddits: [],
                error: false,
                isLoading: false,
            },
            posts: {
                posts: [
                    {
                        "post": "post1",
                        "createdAt": 123232323

                    },
                ],
                subredditSelected: "r/Home/",
                searchTerm: "",
                error: false,
                isLoading: false
            }
        };

        const expectedResult = [
            {
                "post": "post1",
                "createdAt": 123232323

            },
        ]

        const actualResult = selectPostsFromSubreddit(mockStoreState);

        expect(actualResult).toEqual(expectedResult);
    });
})

describe("selectSearchTerm selector", () => {
    it('should return the search term from the store', function () {
        const mockStoreState = {
            subreddits: {
                subreddits: [],
                error: false,
                isLoading: false,
            },
            posts: {
                posts: [],
                subredditSelected: "r/Home/",
                searchTerm: "Post 1",
                error: false,
                isLoading: false
            }
        };

        const expectedResult = "Post 1"

        const actualResult = selectSearchTerm(mockStoreState);

        expect(actualResult).toEqual(expectedResult)

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













