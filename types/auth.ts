export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'contributor' | 'viewer' | 'admin';
  createdAt: string;
  isVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'contributor' | 'viewer';
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

export interface Comment {
  id: string;
  experienceId: string;
  userId: string;
  userName: string;
  userType: 'contributor' | 'viewer' | 'admin';
  content: string;
  createdAt: string;
  parentId?: string; // for replies
  isAdminReply?: boolean;
}
