import React from 'react';
import styles from '../styles/components/Sidebar.module.css'

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className={styles.container}>
      <h1>Cath Flow Board</h1>
      <div className="description">Escolha entre as opções, clique e arraste para a tela.</div>
      <div className={`${styles.node} ${styles.input}`} onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className={styles.node} onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className={`${styles.node} ${styles.output}`} onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>

      <footer className={styles.footer}>Criado por Catharina Mesquita</footer>
    </aside>
  );
};