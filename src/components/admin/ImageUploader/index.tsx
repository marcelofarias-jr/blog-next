import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE_IN_BYTES } from '@/utils/constants';
import { ImageUpIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadin, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');
  function handleImageUpload() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE_IN_BYTES) {
      toast.error(
        'O arquivo selecionado é muito grande. O tamanho máximo permitido é 1MB.',
      );
      fileInput.value = '';
      setImgUrl('');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(`Erro ao enviar a imagem: ${result.error}`);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      if (!result.error) {
        toast.success(`Imagem "${file.name}" enviada com sucesso.`);
        setImgUrl(result.url);
      }
    });

    fileInput.value = '';
  }
  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button
        onClick={() => handleImageUpload()}
        type='button'
        className='self-start'
        disabled={isUploadin}
      >
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input
        ref={fileInputRef}
        name='image'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleChange}
      />
      {imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>Preview da imagem</p>
          <p>Url da imagem: {imgUrl}</p>
          <Image
            src={imgUrl}
            alt='Imagem enviada'
            className='rounded-lg'
            width={500}
            height={300}
          />
        </div>
      )}
    </div>
  );
}
