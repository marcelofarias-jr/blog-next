import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../DeletePostButton';
import ErrorMessage from '../../ErrorMessage';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0) {
    return (
      <ErrorMessage
        contentTitle='Ei 🤨'
        content='Vamos criar algum post para começar?'
      />
    );
  }
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
