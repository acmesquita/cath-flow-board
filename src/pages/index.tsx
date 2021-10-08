import { useRef } from 'react';
import Head from 'next/head'

import { ReactFlowProvider } from 'react-flow-renderer';

import Sidebar from '../components/SideBar';
import Board from '../components/Board';

import styles from '../styles/Home.module.css'

export default function Home() {
  const reactFlowWrapper = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>CathBoardFlow</title>
      </Head>

      <div className={styles.dndflow}>
        <ReactFlowProvider>
          <div className={styles.reactflowWrapper} ref={reactFlowWrapper}>
            <Board reactFlowWrapper={reactFlowWrapper} />
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </div>
    </div>
  )
}
