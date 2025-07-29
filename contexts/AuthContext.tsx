'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  AuthState,
  LoginCredentials,
  SignupCredentials,
} from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (
    credentials: LoginCredentials
  ) => Promise<{ success: boolean; error?: string }>;
  signup: (
    credentials: SignupCredentials
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  forgotPassword: (
    email: string
  ) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (
    token: string,
    newPassword: string
  ) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('beenthere_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        localStorage.removeItem('beenthere_user');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (
    credentials: LoginCredentials
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (
        credentials.email === 'admin@beenthere.com' &&
        credentials.password === 'admin123'
      ) {
        const user: User = {
          id: 'admin-1',
          email: credentials.email,
          name: 'Admin User',
          userType: 'admin',
          createdAt: new Date().toISOString(),
          isVerified: true,
        };

        localStorage.setItem('beenthere_user', JSON.stringify(user));
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });

        return { success: true };
      }

      // Mock user creation for demo
      const user: User = {
        id: `user-${Date.now()}`,
        email: credentials.email,
        name: credentials.email.split('@')[0],
        userType: credentials.userType,
        createdAt: new Date().toISOString(),
        isVerified: true,
      };

      localStorage.setItem('beenthere_user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const signup = async (
    credentials: SignupCredentials
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Validate password
      if (credentials.password.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters long.',
        };
      }

      if (credentials.password !== credentials.confirmPassword) {
        return { success: false, error: 'Passwords do not match.' };
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user: User = {
        id: `user-${Date.now()}`,
        email: credentials.email,
        name: credentials.name,
        userType: credentials.userType,
        createdAt: new Date().toISOString(),
        isVerified: true,
      };

      localStorage.setItem('beenthere_user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('beenthere_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const forgotPassword = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to send reset email. Please try again.',
      };
    }
  };

  const resetPassword = async (
    token: string,
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      if (newPassword.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters long.',
        };
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to reset password. Please try again.',
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        signup,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
