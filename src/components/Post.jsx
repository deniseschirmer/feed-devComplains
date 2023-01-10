import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/81511894?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Denise Schirmer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="10 de Janeiro ás 03:36h" dateTime="2023-01-10">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>

        <p>Acabei de subir mais um projeto, a ideia que seja</p>
        <p>postagens de desabafo. Evento da NLW Return</p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>{''}
          <a href="">#nlw</a>{''}
          <a href="">#rockeseat</a>{''}
        </p>
      </div>
    </article>
  );
}
