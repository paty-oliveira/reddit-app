export function extractSubreddits(payload) {
    return payload.data.children.map(subreddit => subreddit.data);
}