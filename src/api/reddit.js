import { extractSubreddits, extractPostsFromReddit, extractCommentsFromPost } from "./utils";

const rootEndpoint = "https://www.reddit.com/"

export async function getSubreddits() {
    const subredditsEndpoint = rootEndpoint + "subreddits.json";
    try {
        const response = await fetch(subredditsEndpoint);
        const payload = await response.json();

        return extractSubreddits(payload);

    } catch (error) {
        alert("Error while retrieving subreddits: " + error.message);
    }
}

export async function getPostsFromSubreddit(subreddit) {
    const postsEndpoint = rootEndpoint + subreddit + ".json";
    try {
        const response = await fetch(postsEndpoint);
        const payload = await response.json();

        return extractPostsFromReddit(payload);

    } catch (error) {
        alert("Error while retrieving top posts: " + error.message);
    }
}

export async function getPostComments(permalink) {
    const postCommentsEndpoint = rootEndpoint + permalink + ".json"
    try {
        const response = await fetch(postCommentsEndpoint);
        const payload = await response.json();

        return extractCommentsFromPost(payload);

    } catch (error) {
        alert("Error while retrieving comments from post: " + error.message);
    }
}