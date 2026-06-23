import styles from "@/components/cardFlutuante/cardFlutuante.module.scss"
import { oldschoolGrotesk } from "@/app/layout"

type Props = {
  children: React.ReactNode;
  className?: string;
}

export default function CardFlutuante({children, className}: Props) {
  return (
    <div className={`${styles.container} ${className || " "} ${oldschoolGrotesk.className}`}>
      {children}
    </div>
  )
}