import { getAllPostIds, getPostData } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import styles from './Post.module.css'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map(path => ({
    slug: path.params.slug
  }))
}

export default async function Post({ params }: { params: { slug: string[] } }) {
  const postData = await getPostData(params.slug)

  if (!postData) {
    notFound()
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.date}>
        <p>{postData.date}</p>
      </div>
      <div className={`${styles.content} markdown`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
