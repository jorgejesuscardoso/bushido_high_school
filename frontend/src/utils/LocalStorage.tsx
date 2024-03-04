export const SetUserInfoToStorage = (userInfo: string) => {
  localStorage.setItem('userInfo', userInfo);
}

export const GetUserInfoOfStorage = () => {
  const userType = localStorage.getItem('userInfo');
  return userType;
}

