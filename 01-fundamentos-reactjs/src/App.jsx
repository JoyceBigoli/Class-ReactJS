import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
   <div>
    <Header/>

    <div className={styles.wrapper}>
      
      <Sidebar/>

      <main>
        <Post 
          author="Joyce Bigoli" 
          content="Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Vero autem impedit labore enim cum 
    natus sunt! Reiciendis sequi ratione provident repudiandae dolorem? 
    Repudiandae recusandae eos eaque inventore impedit perspiciatis error."
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post, muito legal"
      />
      </main>
    </div>

  </div>
  )
}


