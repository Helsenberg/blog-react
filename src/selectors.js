
export const getPosts = state => {
    const reg = new RegExp(state.posts.search, 'gi');
    const applySearch = item => {
        return reg.test(item.title);
    };

    const posts = state.posts.data.filter(applySearch);
    return posts;
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
    for(let key in posts){
        let post = posts[key];
        if (Number(post.id) === Number(id)){
            return post;
        }
    }
    return false;
}
