import { create } from "zustand";
import type { AuthResponse } from "~/api/requests";

const KEY = "user-info";

type UserInfoData = {
  user: AuthResponse | null;
};

type UserInfoActions = {
  setUserInfo: (userInfo: AuthResponse, rememberMe: boolean) => void;
  clearUserInfo: () => void;
};

export const useUserInfo = create<UserInfoData & UserInfoActions>((set) => {
  let userInfo: AuthResponse | null = null;
  if (typeof window !== "undefined") {
    const userInfoString =
      sessionStorage.getItem(KEY) ?? localStorage.getItem(KEY);
    if (userInfoString) userInfo = JSON.parse(userInfoString) as AuthResponse;
  }

  return {
    user: userInfo,
    setUserInfo: (userInfo: AuthResponse, rememberMe: boolean) => {
      if (rememberMe) {
        localStorage.setItem(KEY, JSON.stringify(userInfo));
      } else {
        sessionStorage.setItem(KEY, JSON.stringify(userInfo));
      }
      set({ user: userInfo });
    },
    clearUserInfo: () => {
      localStorage.removeItem(KEY);
      sessionStorage.removeItem(KEY);
      set({ user: null });
    },
  };
});
