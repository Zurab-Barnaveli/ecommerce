import create from "zustand";

type Admin = {
  id: string;
  email: string;
};

type AdminStore = {
  admin: Admin | null;
  setAdmin: (admin: Admin | null) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  admin: null,
  setAdmin: (admin) => set({ admin }),
}));
