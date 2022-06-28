import { Header } from './components/Header';
import { Post } from './Post';
import './style.css';

export function App() {
  return (
   <div>
    <Header/>
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
  </div>
  )
}


