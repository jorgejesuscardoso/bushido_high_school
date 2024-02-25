export const GetUserType = () => {
  const userType = localStorage.getItem('userType');
  return userType;
}