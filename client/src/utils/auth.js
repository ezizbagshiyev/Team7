export const checkAuth = async () => {
  try {
    const res = await fetch("/api/users/auth-check", { credentials: "include" });
    const data = await res.json();
    return data.authenticated === true;
  } catch {
    return false;
  }
};
