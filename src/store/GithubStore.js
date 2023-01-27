import { create } from 'zustand';

export const useGithubStore = create((set) => ({
    term: '',
    setTerm: (e) => set({ term: e.target.value }),
    clearTerm: () => set({ term: '' }),
}));
