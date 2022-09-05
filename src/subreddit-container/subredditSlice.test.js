import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import reducer, {
    fetchSubreddits,
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
    selectSubreddits
} from "./subredditSlice";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchSubreddits thunk actions",  () => {

    it('should fire startGetSubreddits and getSubredditsSuccess actions in case of success',  function () {
        const expectedActions = ["subreddits/startGetSubreddits", "subreddits/getSubredditsSuccess"];

        // Mock the store
        const store = mockStore({})

        // When fetchSubreddits thunk is dispatched
        return store.dispatch(fetchSubreddits())
            .then(() => {
                const actualActions = store.getActions()
                    .map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    });

    it('should fire getSubredditsFailed action in case of failure/error ',  function () {
        const expectedActions = ["subreddits/getSubredditsFailed"];

        // Mock the store
        const store = mockStore({})

        // When fetchSubreddits thunk is dispatched
        return store.dispatch(fetchSubreddits())
            .catch(() => {
                const actualActions = store.getActions()
                    .map(action => action.type)
                expect(actualActions).toEqual(expectedActions)
            })
    });
})

describe("subredditsSlice reducer", () => {

    it('should return default state', function () {
        const currentState = reducer(undefined, {});
        const expectedState = {
            subreddits: [],
            error: false,
            isLoading: false,
        };

        expect(currentState).toEqual(expectedState);
    });

    it('should update state when fetchSubreddits call start', function () {
        const initialState = {
            subreddits: [],
            error: false,
            isLoading: false,
        };

        const expectedState = {
            subreddits: [],
            error: false,
            isLoading: true,
        };

        const actualState = reducer(initialState, startGetSubreddits);

        expect(actualState).toEqual(expectedState);
    });

    it('should update the state when fetchSubreddits is successfully', function () {
        const initialState = {
            subreddits: [],
            error: false,
            isLoading: true,
        };

        const payloadFromApi = [
            {
                "title": "subreddit1",
                "createdAt": 1223232323
            },
        ];

        const expectedState = {
            subreddits: payloadFromApi,
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, getSubredditsSuccess(payloadFromApi));

        expect(actualState).toEqual(expectedState);

    });

    it('should update existing state when fetchSubreddits is successfully ', function () {
        const initialState = {
            subreddits: [
                {
                    "title": "subreddit1",
                    "createdAt": 1223232323
                },
            ],
            error: false,
            isLoading: true,
        };

        const payloadFromApi = [
            {
                "title": "subreddit2",
                "createdAt": 232399003
            }
        ];

        const expectedState = {
            subreddits: payloadFromApi,
            error: false,
            isLoading: false
        };

        const actualState = reducer(initialState, getSubredditsSuccess(payloadFromApi));

        expect(actualState).toEqual(expectedState);

    });

    it('should update state when fetchSubreddits fails', function () {
        const initialState = {
            subreddits: [],
            error: false,
            isLoading: false,
        };

        const expectedState = {
            subreddits: [],
            error: true,
            isLoading: false,
        };

        const actualState = reducer(initialState, getSubredditsFailed);

        expect(actualState).toEqual(expectedState);
    });
})

describe("selectSubreddits selector", () => {
    it('should return an empty list of subreddits from the store', function () {
        const mockStoreState = {
            subreddits: {
                subreddits: [],
                error: false,
                isLoading: false,
            },
        };

        const expectedResult = [];

        const actualResult = selectSubreddits(mockStoreState);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should return the subreddit from the store', function () {
        const mockStoreState = {
            subreddits: {
                subreddits: [
                    {
                        "title": "example1",
                        "createdAt": 123232323
                    }
                ],
                error: false,
                isLoading: false,
            },
        }

        const expectedResult = [
            {
                "title": "example1",
                "createdAt": 123232323
            }
        ];

        const actualResult = selectSubreddits(mockStoreState);

        expect(actualResult).toEqual(expectedResult);
    });
})
