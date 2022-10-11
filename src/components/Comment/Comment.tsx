import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps{
  content: string;
  onDeleteComment: (comment:string) => void;
}

export default function Comment({content,onDeleteComment}:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleAddLike(){
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/DiogoMiranda-dev.png"  />

        <div className={styles.commentBox}>
          <div className={styles.commentContent} >
            <header>
              <div className={styles.AuthorAndTime}>
                <strong>Diogo Miranda</strong>
                <time title="27 de Setembro 2022 ás 12:00h" dateTime="2022-09-27 12:00" >Cerca de 1h atrás</time>
              </div>
              <button onClick={handleDeleteComment} title="Deletar comentário" >
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button 
              onClick={handleAddLike}
              title="Deixar o like no comentário"
            >
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>  
    </div>
  )
}
