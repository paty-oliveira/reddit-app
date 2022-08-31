import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchSubreddits } from "./subredditSlice";

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
