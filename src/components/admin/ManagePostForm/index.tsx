'use client';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { BugIcon } from 'lucide-react';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [content, setContent] = useState('');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          placeholder='Digite o título do post...'
          labelText={'Título'}
        />
        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={content}
          setValue={setContent}
        />
        <ImageUploader />
        <InputCheckbox labelText={'publicado'} />

        <Button variant='default'>
          <BugIcon />
          Confirma
        </Button>
      </div>
    </form>
  );
}
