'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const MIN_REFRESH_INTERVAL_MS = 5_000;

export function RefreshOnFocus() {
  const router = useRouter();
  const routerRef = useRef(router);
  const lastRefreshAtRef = useRef(0);

  // Mantém a referência sempre atualizada sem ser dependência do useEffect
  routerRef.current = router;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;

      const now = Date.now();
      if (now - lastRefreshAtRef.current < MIN_REFRESH_INTERVAL_MS) return;

      lastRefreshAtRef.current = now;
      routerRef.current.refresh();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // [] — listener registrado apenas uma vez

  return null;
}
