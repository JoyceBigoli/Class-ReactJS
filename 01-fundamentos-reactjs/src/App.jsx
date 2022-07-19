import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

// author{avatar_url "", name:"", role:"}
// publishedAt: Date
// content: string

const posts =[
  {
    id: 1,
    author:{
    avatarUrl:'https://github.com/JoyceBigoli.png',
    name:'Joyce Bigoli',
    role:'Web Developer',
  },
  content:[
    { type:'paragraph', content:'Fala galeraa 👋,'},
    { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type:'link', content:'jane.design/doctorcare'},
  ],
  publishedAt:new Date('2022-07-19 20:00:00')
},
{
  id: 2,
  author:{
  authorUrl:'https://github.com/viniciusidacruz.png',
  name:'Vinícius Italo',
  role:'Web Developer',
},
content:[
  { type:'paragraph', content:'Fala galeraa 👋,'},
  { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
  {type:'link', content:'jane.design/doctorcare'},
],
publishedAt:new Date('2022-07-10 20:00:00')
}
];

export function App() {
  return (
   <div>
    <Header/>

    <div className={styles.wrapper}>
      
      <Sidebar/>

      <main>
       {posts.map(post => {
        return (
          <Post
          author={post.author} 
          content={post.content}  
          publishedAt={post.publishedAt} 
          />
            )
       })}
      </main>
    </div>

  </div>
  )
}


