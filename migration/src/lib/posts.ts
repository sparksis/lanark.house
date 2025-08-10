import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { glob } from 'glob'

const postsDirectory = path.join(process.cwd(), 'content/_posts')

export function getSortedPostsData() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(postsDirectory, '').replace(/\.md$/, '')
    const fileContents = fs.readFileSync(fileName, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string; title:string })
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug: string[]) {
  const fullPath = path.join(postsDirectory, ...slug) + '.md'
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id: slug.join('/'),
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}

export function getAllPostIds() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`)
  return fileNames.map(fileName => {
    const slug = fileName
      .replace(postsDirectory, '')
      .replace(/\.md$/, '')
      .split('/')
      .filter(p => p)
    return {
      params: {
        slug: slug
      }
    }
  })
}
