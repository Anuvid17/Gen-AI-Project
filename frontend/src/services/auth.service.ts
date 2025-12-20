import api from "./api";

/* ---------- Types ---------- */
export interface User {
  id: number;
  username: string;
  email?: string;
}

/* ---------- Auth ---------- */
export const login = async (data: {
  username: string;
  password: string;
}) => {
  const res = await api.post("/auth/login/", data);

  localStorage.setItem("access_token", res.data.access);
  localStorage.setItem("refresh_token", res.data.refresh);

  return res.data;
};

export const signup = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/register/", data);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
};

/* ---------- Profile ---------- */
export const getProfile = async (): Promise<User> => {
  const res = await api.get("/auth/profile/");
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};