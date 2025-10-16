'use server';

import { revalidateTag } from 'next/cache';

export async function revalidadeExample(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('estou em uma server action', path);
  revalidateTag('posts');
  revalidateTag('posts-');
}
