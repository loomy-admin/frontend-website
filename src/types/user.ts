export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  curriculum: string;
  interests: string[];
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}