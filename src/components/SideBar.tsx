import React from 'react';
import { ButtonDrag } from '../components/ButtonDrag'
import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <h1>Cath Flow Board</h1>
      <p>Escolha entre as opções, clique e arraste para a tela.</p>

      <ButtonDrag className={styles.input} type="input" label="Input Node" />
      <ButtonDrag type="default" label="Default Node" />
      <ButtonDrag className={styles.output} type="output" label="Output Node" />

      <footer className={styles.footer}>Criado com &#10084;&#65039; por <a href="https://github.com/acmesquita">Catharina Mesquita</a></footer>
    </aside>
  );
};
