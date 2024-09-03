'use client';
import React from 'react';
import { useWorkSpaceContext } from '@/services/workspace.context';

import WorkSpaceCard from './shared/WorkSpaceCard';

const WorkspaceListItems: React.FC = () => {
  const { workspaces } = useWorkSpaceContext();

  return (
    <div className='mt-7 lg:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-11'>
      {workspaces.map((workspace) => (
        <WorkSpaceCard key={workspace.id} {...workspace} />
      ))}
    </div>
  );
};

export default WorkspaceListItems;
