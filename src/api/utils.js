export function extractSubreddits(payload) {
    return payload.data.children.map(subreddit => subreddit.data);
}

export function extractPostsFromReddit(payload) {
    const posts = [];
    let postsMetadata = payload.data.children;

    postsMetadata.map(
        post => posts.push(
            {
                title: post.data.title,
                author: post.data.author,
                time: post.data.created,
                numberComments: post.data.num_comments,
                ups: post.data.ups,
                downs: post.data.downs,
                commentsUrl: post.data.permalink
            }
        )
    )

    return posts;
}

export function extractCommentsFromPost(payload) {
    const comments = [];
    const commentsMetadata = payload[1].data.children

    commentsMetadata.map(
        comment => comments.push(
            {
                author: comment.data.author,
                body: comment.data.body,
                createdAt: comment.data.created
            }
        )
    )

    return comments;
}