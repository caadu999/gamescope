'use client';

import styles from '@/components/searchInput/searchInput.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const Router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    Router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        type="search"
        value={query}
        name="search"
        id="search"
        placeholder="Buscar jogos..."
        onChange={(e) => setQuery(e.target.value)}
        className={styles.search}
      />
      <button className={styles.button} type="submit">
        Buscar
      </button>
    </form>
  );
}
