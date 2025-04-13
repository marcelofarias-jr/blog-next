import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../admin/DeletePostButton';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();
  return (
    <div className='mb-16'>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            className={clsx(
              'py-2',
              'px-2',
              !post.published && 'text-slate-500',
              'flex gap-2 items-center justify-between',
            )}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className='text-xs text-slate-600 font-bold italic'>
                Não publicado
              </span>
            )}
            <DeletePostButton title={post.title} id={post.id} />
          </div>
        );
      })}
    </div>
  );
}
