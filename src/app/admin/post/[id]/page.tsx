export const dynamic = 'force-dynamic';

type AdminsPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function AdminPostIdPage({
  params,
}: AdminsPostIdPageProps) {
  const { id } = await params;
  return <h1>AdminPostIdPage : {id}</h1>;
}
