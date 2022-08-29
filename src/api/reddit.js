import { extractSubreddits, extractPostsFromReddit } from "../utils/utils";

const rootEndpoint = "https://www.reddit.com/"

export async function getSubreddits() {
    const subredditsEndpoint = rootEndpoint + "subreddits.json";
    try {
        const response = await fetch(subredditsEndpoint);
        const payload = await response.json();

        return extractSubreddits(payload);

    } catch (error) {
        alert("Error while retrieving subreddits: " + error);
    }
}

export async function getPosts() {
    const postsEndpoint = rootEndpoint + "r/all/top/.json";
    try {
        const response = await fetch(postsEndpoint);
        const payload = await response.json();

        return extractPostsFromReddit(payload);

    } catch (error) {
        alert("Error while retrieving top posts: " + error);
    }
}