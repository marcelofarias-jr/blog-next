'use client';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { BugIcon } from 'lucide-react';
import { useActionState, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { InputCheckbox } from '@/components/InputCheckbox';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );
  const { formState } = state;
  const [content, setContent] = useState(publicPost?.content || '');
  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          defaultValue={formState.id}
          type='text'
          readOnly
        />
        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerada automaticamente'
          defaultValue={formState.slug}
          type='text'
          readOnly
        />
        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digite o nome do autor'
          defaultValue={formState.author}
          required
        />
        <InputText
          labelText='Título'
          name='title'
          placeholder='Digite o título do post'
          defaultValue={formState.title}
          required
        />
        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digite o resumo do post'
          defaultValue={formState.excerpt}
          required
        />
        <MarkdownEditor
          labelText='Conteúdo'
          value={content}
          setValue={setContent}
          textAreaName='content'
          disabled={false}
        />
        <ImageUploader />
        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          placeholder='Digite a URL da imagem de capa'
          defaultValue={formState.coverImageUrl}
          required
        />
        <InputCheckbox
          labelText='Publicado'
          name='published'
          type='checkbox'
          defaultChecked={formState.published}
        />
        <Button variant='default' disabled={isPending} type='submit'>
          <BugIcon />
          Confirma
        </Button>
      </div>
    </form>
  );
}
