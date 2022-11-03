import { Trash } from "phosphor-react";
import styles from "./Item.module.css";

interface ItemProps {
	isChecked?: boolean;
	title: string;
	itemId: string;
	deleteItem: (item: string) => void;
  changeStatus: (item: string) => void;
}

export function Item({ title, isChecked, itemId, deleteItem, changeStatus }: ItemProps) {
	function handleDeleteItem() {
		deleteItem(itemId)
	}

  function newStatus() {
    changeStatus(itemId)
  }

	return (
		<div
			className={[styles.item, isChecked ? styles.itemChecked : ""].join(" ")}>
			<span className={styles.itemCheck} onClick={newStatus} ></span>
			<p>{title}</p>
			<button onClick={handleDeleteItem}>
				<Trash size={20} />
			</button>
		</div>
	);
}
