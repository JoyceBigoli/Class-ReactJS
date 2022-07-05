import styles from  './Sidebar.module.css';

export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1624313976899-0fd4989a2fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
            />
            <div className={styles.profile}>
                <img className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/97766440?v=4"/>
                <strong>Joyce Bigoli</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}