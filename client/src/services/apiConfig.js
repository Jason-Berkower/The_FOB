import axios from "axios";

const baseUrl = "https://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

// FOR USERS
export const getAllUsers = async () => {
  const res = await api.get(`/users`);
  return res.data;
};

export const getOneUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (formData) => {
  const res = await api.post("/users", { user: formData });
  return res.data;
};

// FOR CHARACTERS
export const getAllCharacters = async () => {
  const res = await api.get(`/characters`);
  return res.data;
};

export const getOneUser = async (id) => {
  const res = await api.get(`/characters/${id}`);
  return res.data;
};

export const createUser = async (formData) => {
  const res = await api.post("/characters", { user: formData });
  return res.data;
};

// FOR POSTS
export const getAllPosts = async () => {
  const res = await api.get(`/posts`);
  return res.data;
};

export const getOnePost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const createPost = async (formData) => {
  const res = await api.post("/post", { post: formData });
  return res.data;
};

// FOR COMMENTS
