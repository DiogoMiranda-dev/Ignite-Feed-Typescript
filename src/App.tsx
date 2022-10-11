import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
        avatarUrl:'https://github.com/DiogoMiranda-dev.png',
        name:'Diogo Miranda',
        role:'Developer'
    },
    publishedAt: new Date('2022-10-01 10:00:00'),
    content: [
      {
        type:'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type:'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type:'link',
        content: 'jane.design/doctorcare'
      }
    ]
  },
  {
    id: 2,
    author: {
        avatarUrl:'https://github.com/maykbrito.png',
        name:'Mayk Brito',
        role:'Developer'
    },
    publishedAt: new Date('2022-10-02 10:00:00'),
    content: [
      {
        type:'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type:'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type:'link',
        content: 'jane.design/doctorcare'
      }
    ]
  },
  {
    id: 3,
    author: {
        avatarUrl:'https://github.com/diego3g.png',
        name:'Diogo Fernandes',
        role:'CTO @Rocketseat'
    },
    publishedAt: new Date('2022-10-03 10:00:00'),
    content: [
      {
        type:'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type:'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type:'link',
        content: 'jane.design/doctorcare'
      }
    ]
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
             return (
              <Post  
              key={post.id}
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
              />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
