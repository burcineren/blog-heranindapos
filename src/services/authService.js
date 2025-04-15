import api from "./api";

export const login = async (email, password) => {
  const response = await api.get("/users");
  const users = response.data;
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    throw new Error("Kullanıcı bulunamadı.");
  }
  return user;
};

export const register = async (name, email, password) => {
  const response = await api.post("/users", { name, email, password });
  return response.data;
};
