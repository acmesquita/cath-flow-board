import React from 'react';
import styles from '../styles/components/Sidebar.module.css'

export function ButtonDrag({ className = "", type, label }) {
  const onDragStart = (event: any) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div className={`${styles.node} ${className}`} onDragStart={onDragStart} draggable>
      {label}
    </div>
  )
}
