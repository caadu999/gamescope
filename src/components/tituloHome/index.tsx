import styles from '@/components/tituloHome/titulo.module.scss';
import { oldschoolGrotesk } from '@/app/layout';

type Props = {
  text: string;
}

export default function TituloHome({text}: Props) {
  return (
    <h1 className={`${styles.titulo} ${oldschoolGrotesk.className}`}>
      {text}
    </h1>
  );
}
