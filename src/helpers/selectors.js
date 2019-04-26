
export const getPosts = posts => {
    const reg = new RegExp(posts.search, 'gi');
    const applySearch = item => {
        return reg.test(item.title);
    };
    return posts.data.filter(applySearch);
}

export const uniquePosts = posts => {
    var uniqueIds = {};
    for (let key in posts) {
        let post = posts[key];
        let id = String(post.id);
        uniqueIds[id] = true;
    }
    let returnedArr = [];
    for (let postId in uniqueIds) {
        returnedArr.push(getPostById(posts, postId));
    }
    return returnedArr;
}

export const getPostById = (posts, id) => {
    return posts.find(post => Number(post.id) === Number(id)) || null;
}

export const getCommentById = (comments, id) => {
    return comments.find(comment => Number(comment.id) === Number(id)) || null;
}
