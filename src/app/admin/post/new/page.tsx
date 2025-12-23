import { ManagePostForm } from '@/components/admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Criar novo post - Admin',
};

export default async function AdminPostNewPage() {
  return (
    <>
      <h1 className='text-4xl mb-6 flex'>Criar post</h1>
      <ManagePostForm />
    </>
  );
}
