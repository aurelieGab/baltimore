import React from 'react'
import { getPosts } from '@/utils/wordpress'

export default async function Posts() {
  const posts = await getPosts()
  return (
    <>
      {posts.map((post) => (
        <li key={post.id} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      ))}
    </>
  )
}
