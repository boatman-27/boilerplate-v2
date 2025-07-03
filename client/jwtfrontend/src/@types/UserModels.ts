interface User {
  Fname: string;
  Lname: string;
  Email: string;
  UserID: string;
  UserRole: string;
  Coins: number;
  Xp: number;
  Level: number;
  Streak: number;
}

interface UserInitialState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  accessToken?: string;
}

export type UserAction =
  | { type: "Logout" }
  | {
      type: "Login";
      payload: {
        user: UserInitialState["user"];
        accessToken: UserInitialState["accessToken"];
      };
    };

export type { UserInitialState };
