import fetch from 'cross-fetch';
const urlGetPost = 'https://jsonplaceholder.typicode.com/posts';
const urlGetAuthor = 'https://jsonplaceholder.typicode.com/users';

export const fetchPosts = async (start, limit = 10) => {
    const response = await fetch(`${urlGetPost}?_start=${start}&_limit=${limit}`);
    return await response.json();
}

export const fetchPostById = async (id) => {
    const response = await fetch(`${urlGetPost}/${id}`);
    return await response.json();
}

export const fetchAuthorById = async (id) => {
    const response = await fetch(`${urlGetAuthor}/${id}`);
    return await response.json();
}

export const fetchCommentsByPostId = async (id) => {
    const response = await fetch(`${urlGetPost}/${id}/comments`);
    return await response.json();
}
