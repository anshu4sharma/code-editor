import { create } from "zustand";

type File = {
  title: string;
  fileId: number;
};

type Store = {
  files: File[];
  createFile: (newFile: File) => void;
  removeFile: (fileId: number) => void;
  addFiles: (Files: File[]) => void; // New function
};

const useFiles = create<Store>((set) => ({
  files: [
    {
      fileId: 1,
      title: "index.html",
    },
    {
      fileId: 2,
      title: "main.js",
    },
    {
      fileId: 3,
      title: "style.css",
    },
    {
      fileId: 4,
      title: "index.ts",
    },
  ],
  createFile: (newFile) => {
    set((state) => ({
      files: [...state.files, newFile],
    }));
  },
  removeFile: (fileId) =>
    set((state) => ({
      files: state.files.filter((file) => file.fileId !== fileId),
    })),

  addFiles: (Files) =>
    set((_state) => ({
      files: Files,
    })),
}));

export default useFiles;
