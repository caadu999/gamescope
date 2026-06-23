import styles from '@/components/grid/grid.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function Grid({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
