import { Item } from "./Item";
import styles from "./Tasks.module.css";
import clipboard from "../images/clipboard.png";

export function Tasks() {
	return (
		<section className={styles.tasks}>
			<div className={styles.tasksDetails}>
				<p>
					Tarefas Criadas <span>0</span>
				</p>
				<p>
					Concluidas <span>0</span>
				</p>
			</div>

			<div className={styles.tasksEmpty}>
				<img src={clipboard} />
				<p>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					Crie tarefas e organize seus itens a fazer
				</p>
			</div>

			<div className={styles.tasksList}>
				<Item isChecked={true} />
				<Item />
				<Item />
			</div>
		</section>
	);
}
