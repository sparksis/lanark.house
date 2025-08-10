import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <p>{date}</p>
            </small>
          </li>
        ))}
      </ul>
    </section>
  )
}
