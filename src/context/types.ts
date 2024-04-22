// Context Initial State
export interface IState {
    activeFile: fileData;
    filesList: string[];
    filesData: fileData[];
    addFile: (fileData: fileData) => void;
    removeFile: (filename: string) => void;
    changeActiveFile: (fileData: fileData) => void;
    addFileData: (fileValue: string) => void;
    addImportedFilesData: (filesData: fileData[]) => void;
  }
  
  // Code files mapped with names
  export interface fileData {
    name: string;
    language: string;
    value: string;
  }
  