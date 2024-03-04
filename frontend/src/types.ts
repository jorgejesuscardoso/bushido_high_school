interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  role_id: number;
}

interface LoginUserModel {
  email: string;
  password: string;
}