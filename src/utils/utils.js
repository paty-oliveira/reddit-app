export function extractSubRedditTitle(payload) {
    return payload.data.children.map(subreddit => subreddit.data.title);
}