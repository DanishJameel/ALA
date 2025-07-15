import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanity';
import { PortableText } from '@portabletext/react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        body,
        mainImage{asset->{url}},
        publishedAt,
        author->{name},
        categories[]->{title}
      }`,
      { slug }
    ).then(setPost);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.mainImage && (
        <img src={post.mainImage.asset.url} alt={post.title} className="mb-6 rounded-lg w-full object-cover" />
      )}
      <div className="mb-4 text-gray-500 text-sm">
        <span>By {post.author?.name || 'Unknown'}</span> |{' '}
        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
        {post.categories && post.categories.length > 0 && (
          <>
            {' '}| <span>{post.categories[0].title}</span>
          </>
        )}
      </div>
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </div>
  );
};

export default BlogPost; 