'use client';
import React from 'react'

import { WorkSpaceProvider } from '@/services/workspace.context';

const StateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <WorkSpaceProvider>
      {children}
    </WorkSpaceProvider>
  )
}

export default StateProvider;