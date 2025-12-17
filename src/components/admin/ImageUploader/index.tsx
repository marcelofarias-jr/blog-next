import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE_IN_BYTES } from '@/utils/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUpload, startTransition] = useTransition();
  console.log('🚀 ~ ImageUploader ~ isUpload:', isUpload);
  function handleImageUpload() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) return;
    console.log('Arquivo selecionado:', file);

    if (file.size > IMAGE_UPLOAD_MAX_SIZE_IN_BYTES) {
      toast.error(
        'O arquivo selecionado é muito grande. O tamanho máximo permitido é 1MB.',
      );
      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    startTransition(async () => {
      const result = await uploadImageAction(formData);
      console.log('🚀 ~ handleChange ~ result:', result);

      if (result.error) {
        toast.error(`Erro ao enviar a imagem: ${result.error}`);
        fileInput.value = '';
        return;
      }

      if (!result.error) {
        toast.success(`Imagem "${file.name}" enviada com sucesso.`);
      }
    });

    fileInput.value = '';
  }
  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button
        onClick={() => handleImageUpload()}
        type='button'
        className='self-start'
        disabled={isUpload}
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
    </div>
  );
}
