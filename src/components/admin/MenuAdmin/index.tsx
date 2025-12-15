'use client';
import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);
  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center gap-2 cursor-pointer rounded-lg',
    'trasition hover:bg-slate-700',
    'h-10 shrink-0',
  );
  const openCloseBtnClasses = clsx(
    linkClasses,
    'terxt-blue-200 italic',
    'sm:hidden',
  );
  return (
    <nav className={navClasses} onClick={() => setIsOpen(prev => !prev)}>
      <button className={openCloseBtnClasses}>
        {!isOpen && (
          <>
            <MenuIcon /> Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon /> Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href='/admin/post/new'>
        <PlusIcon />
        Criar post
      </Link>
    </nav>
  );
}
