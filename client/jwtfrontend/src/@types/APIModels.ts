interface RegisterData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cPassword: string;
  userId: string;
}

interface LoginData {
  email: string;
  password: string;
}

export type { RegisterData, LoginData };
