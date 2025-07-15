import React, { useEffect, useState } from 'react'
import sanityClient from '../sanity'
import { Button } from '@/components/ui/button'
import { Calendar, MessageCircle } from 'lucide-react'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]{
        _id,
        title,
        slug,
        publishedAt,
        author->{name},
        excerpt,
        mainImage{asset->{url}},
        categories[]->{title}
      } | order(publishedAt desc)`
    ).then(setBlogPosts)
  }, [])

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Latest News & Articles
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages Lorem available, but the majority have suffered alteration in some form or randomised even
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {post.mainImage?.asset?.url ? (
                  <img src={post.mainImage.asset.url} alt={post.title} className="object-cover h-full w-full" />
                ) : (
                  <span>📰</span>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  {post.categories && post.categories.length > 0 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                      {post.categories[0].title}
                  </span>
                  )}
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <a href={`/blog/${post.slug.current}`} className="hover:underline">
                    {post.title}
                  </a>
                </h3>

                {/* Post Meta */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span>{post.author?.name || 'Unknown'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
                  </div>
                </div>

                {/* Post Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Post Footer */}
                <div className="flex items-center justify-between">
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                    <a href={`/blog/${post.slug.current}`}>Read More →</a>
                  </Button>
                  {/* Comments count can be added if available in Sanity */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

