import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  unstable_cache(
    async () => {
      try {
        return await postRepository.findAllPublic();
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes('no such table: posts')) {
            return [];
          }
        }

        throw error;
      }
    },
    ['posts'],
    {
      tags: ['posts'],
    },
  ),
);

export const findPublicPostBySlugCached = cache((slug: string) => {
  return unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();

      return post;
    },
    [`post-${slug}`],
    { tags: [`post-${slug}`] },
  )(slug);
});
