import { Trash } from 'phosphor-react'
import styles from './Item.module.css'

interface ItemProps {
  isChecked?: boolean
}

export function Item({ isChecked }: ItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.itemCheck}></span>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}