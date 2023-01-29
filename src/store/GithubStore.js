import { create } from 'zustand';

export const useGithubStore = create((set) => ({
    term: '',
    setTerm: (value) => set(() => ({ term: value })),
    username: '',
    setUsername: (value) => set(() => ({ username: value })),
}));
