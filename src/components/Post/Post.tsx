import { 
  format,
  formatDistanceToNow
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FormEvent, ChangeEvent, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css';

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps{
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface Content{
  type: 'paragraph'|'link';
  content: string;
}

export function Post({ author,content,publishedAt}:PostProps) {
  const [comments,setComments] = useState([
    'Post muito bacana, hein?'
  ]);

  const [newCommentText,setNewCommentText] = useState('');

  const publishedDateFormat = format(publishedAt,"d 'de' LLL 'às' HH:mm'h'",{
    locale:ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix: true,
  });

  function handleCreateComment(event: FormEvent){
     event.preventDefault()
     setComments([...comments,newCommentText]);
     setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string){
      const commentsWithDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete
      });
      setComments(commentsWithDeleteOne);
  }

  return (
    <article className={styles.post}>
     
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((line) => {
            if (line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>;
            }else{
              return  (<p key={line.content}><a href="">{line.content}</a></p>);
            }
          })
        }
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment"
          placeholder='Deixe seu Comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
        />
        <footer>
          <button 
            type="submit" 
            disabled={newCommentText.length===0}
            >
              Publicar
            </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment,index) => {
            return <Comment 
              key={index} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          })
        }
      </div>
    </article>
  )
}