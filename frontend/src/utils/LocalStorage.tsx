export const GetUserType = () => {
  const userType = localStorage.getItem('userType');
  return userType;
}

export const SetToken = (token: string) => {
  localStorage.setItem('token', token);
}

export const SetRole = (role: string) => {
  localStorage.setItem('role', role);
}

export const GetToken = () => {
  const token = localStorage.getItem('token');
  return token;
}