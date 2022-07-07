import styles from './Post.module.css';
export function Post() {
    return (
       <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/97766440?v=4" />
            </div>
            <div className={styles.authorInfo}>
                <strong>Joyce Bigoli</strong>
                <span>Web Developer</span>
            </div>
            <time title= "11 se Maio ás 8:13" dateTime="2022-05-11 08:13:36">Publicado há 1hr</time>
         </header>
        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
        </div>
       </article>
    )
}