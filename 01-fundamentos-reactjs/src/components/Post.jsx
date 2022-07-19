import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {

    return (
       <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar src={props.author.avatarUrl} />
            </div>
            <div className={styles.authorInfo}>
                <strong>{props.author.name}</strong>
                <span>{props.author.role}</span>
            </div>
            <time title= "11 se Maio ás 8:13" dateTime="2022-05-11 08:13:36">Publicado há 1hr</time>
         </header>
        <div className={styles.content}>
         <p>Fala galeraa 👋</p>
         <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
         <p>
            <a href="#">jane.design/doctorcare</a></p>
         <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
         </p>
      </div>

         <form className={styles.commentForm}>
               <strong>Deixe seu Feedback</strong>
            
               <textarea placeholder='Deixe um comentário'
               />
               <footer>
               <button type='submit'>Publicar</button>   
            </footer>
         </form>    
         <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />            
         </div>   

       </article>
    )
}