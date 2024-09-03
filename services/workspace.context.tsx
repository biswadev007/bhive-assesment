'use client';
import React, { createContext, useContext } from 'react';
import { IWorkspace, workspaces } from '@/data';

interface WorkSpaceContextType {
  workspaces: IWorkspace[];
  getWorkSpace: (workSpaceId: string) => IWorkspace | undefined;
}

const WorkSpaceContext = createContext<WorkSpaceContextType | undefined>(
  undefined
);

export const WorkSpaceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getWorkSpace = (workSpaceId: string): IWorkspace | undefined => {
    return workspaces.find(({ id }) => id === workSpaceId);
  };

  return (
    <WorkSpaceContext.Provider value={{ workspaces, getWorkSpace }}>
      {children}
    </WorkSpaceContext.Provider>
  );
};

export const useWorkSpaceContext = (): WorkSpaceContextType => {
  const context = useContext(WorkSpaceContext);
  if (!context) {
    throw new Error("useWorkSpaceContext must be used within a WorkSpaceProvider");
  }
  return context;
};

export default WorkSpaceContext;
