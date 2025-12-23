import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { makePublicPostFromDb } from '@/dto/post/dto';
import { findPostByIdAdmin } from '@/lib/post/queries/admin';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

type AdminsPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata = {
  title: 'Editar novo post - Admin',
};
export default async function AdminPostIdPage({
  params,
}: AdminsPostIdPageProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();
  if (!post) {
    notFound();
  }
  const publicPost = makePublicPostFromDb(post);
  return (
    <>
      <h1 className='text-4xl mb-6 flex'>Editar post</h1>
      <ManagePostForm publicPost={publicPost} />
    </>
  );
}
