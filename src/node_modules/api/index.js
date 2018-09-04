import request from "superagent";
const urlGetPost = 'https://jsonplaceholder.typicode.com/posts';
const urlGetAuthor = 'https://jsonplaceholder.typicode.com/users';

export const fetchPosts = async (start, limit) => {
    const { body } = await request.get(`${urlGetPost}?_start=${start}&_limit=${limit}`);
    return body;
}

export const fetchPostById = async (id) => {
    const { body } = await request.get(`${urlGetPost}/${id}`);
    return body;
}

export const fetchAuthorById = async (id) => {
    const { body } = await request.get(`${urlGetAuthor}/${id}`);
    return body;
}

export const fetchCommentsByPostId = async (id) => {
    const { body } = await request.get(`${urlGetPost}/${id}/comments`);
    return body;
}
