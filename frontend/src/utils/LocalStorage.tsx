export const SetUserInfoToStorage = (userInfo: string) => {
  localStorage.setItem('userInfo', userInfo);
}

export const GetUserInfoOfStorage = () => {
  const userInfos = localStorage.getItem('userInfo');
  const userInfoParsed = userInfos ? JSON.parse(userInfos) : '';
  return userInfoParsed;
}

export const RemoveUserInfoOfStorage = () => {
  localStorage.removeItem('userInfo');
}
