import { Genre } from '@/types/types';
import styles from '@/components/tags/tags.module.scss';

type TagsProps = {
  text: Genre;
};

export default function Tags({ text }: TagsProps) {
  return <li className={styles.lista}>{text.name}</li>;
}
