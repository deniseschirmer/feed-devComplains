
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css' 


export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
        <Post 
        author="Denise Schirmer"
        content="Bugs engolindo bugs"
        />
        <Post 
        author="Denise Schirmer"
        content="Horas depois, era só um ponto e virgula..."
        />

      </main>
    </div>
    </div>
  )
}


