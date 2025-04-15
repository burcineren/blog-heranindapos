import api from "./api";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (title, body) => {
  const response = await api.post("/posts", { title, body });
  return response.data;
};

export const updatePost = async (id, updatedData) => {
  const response = await api.put(`/posts/${id}`, updatedData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};
export const register = async (name, email, password) => {
  const response = await api.post("/users", { name, email, password });
  return response.data;
};
