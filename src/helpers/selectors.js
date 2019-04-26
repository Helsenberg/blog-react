
export const getPosts = posts => {
    const reg = new RegExp(posts.search, 'gi');
    const applySearch = item => {
        return reg.test(item.title);
    };
    return posts.data.filter(applySearch);
}

export const getPostById = (posts, id) => {
    return posts.find(post => Number(post.id) === Number(id)) || null;
}

export const getCommentById = (comments, id) => {
    return comments.find(comment => Number(comment.id) === Number(id)) || null;
}
