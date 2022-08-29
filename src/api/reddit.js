import { extractSubreddits } from "../utils/utils";

const rootEndpoint = "https://www.reddit.com/"

export async function getSubreddits() {
    const subredditsEndpoint = rootEndpoint + "subreddits.json";
    try {
        const response = await fetch(subredditsEndpoint);
        const json = await response.json();

        return extractSubreddits(json);

    } catch (error) {
        alert("Error while retrieving subreddits: " + error)
    }
}