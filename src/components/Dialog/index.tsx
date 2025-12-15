'use client';

import clsx from 'clsx';
import { Button } from '../Button';
type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};
export function Dialog({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  if (!isVisible) {
    return null;
  }
  function handleCancel() {
    if (disabled) return;
    onCancel();
  }
  return (
    <div
      className={clsx(
        'fixed z-50 inset-0 bg-black/50 backdrop-blur-xs',
        'flex items-center justify-center flex-col',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
          'flex flex-col gap-4',
          'shadow-lg shadow-black/30 text-center',
        )}
        role='dialog'
        aria-modal='true'
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h1 id='dialog-title' className='text-xl font-bold'>
          {title}
        </h1>
        <div id='dialog-description'>{content}</div>
        <div className='flex items-center justify-around gap-4'>
          <Button
            variant='ghost'
            autoFocus
            onClick={onCancel}
            disabled={disabled}
          >
            Cancelar
          </Button>
          <Button variant='default' onClick={onConfirm} disabled={disabled}>
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}
