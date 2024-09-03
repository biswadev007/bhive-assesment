import React from 'react'

import Heading from './shared/Heading';
import WorkspaceListItems from './WorkspaceListItems';

const WorkspaceList: React.FC = () => {
  return (
    <section>
      <Heading heading='Our Space Overview' />
      <WorkspaceListItems />
    </section>
  )
}

export default WorkspaceList;