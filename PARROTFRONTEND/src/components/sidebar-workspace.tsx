import React from 'react'

interface SidebarWorkspaceProps {
    title: string,
    className: string
  }
  

export const SidebarWorkspace: React.FC<SidebarWorkspaceProps> = ({title, className}) => {
  return (
    <div className='flex items-center pl-4'>
        <button className={`${className}`}>{title}</button>
    </div>
  )
}
