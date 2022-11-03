import { Item } from "./Item";
import styles from "./Tasks.module.css";
import clipboard from "../images/clipboard.png";

interface Itens {
	id: string;
	title: string;
	isChecked: boolean;
}

interface TasksProps {
	itens: Itens[];
	onDeleteTaks: (item: string) => void;
	changeItemStatus: (item: string) => void;
	totalTasks: number;
	totalCompleteTasks: number;
}

export function Tasks({
	itens,
	onDeleteTaks,
	totalTasks,
	totalCompleteTasks,
	changeItemStatus
}: TasksProps) {
	return (
		<section className={styles.tasks}>
			<div className={styles.tasksDetails}>
				<p>
					Tarefas Criadas <span>{totalTasks}</span>
				</p>
				<p>
					Concluidas <span>{totalCompleteTasks}</span>
				</p>
			</div>

			{itens.length === 0 && (
				<div className={styles.tasksEmpty}>
					<img src={clipboard} />
					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						Crie tarefas e organize seus itens a fazer
					</p>
				</div>
			)}

			{itens.length !== 0 && (
				<div className={styles.tasksList}>
					{itens
						.sort((a, b) => Number(a.isChecked) - Number(b.isChecked))
						.map((item) => {
							return (
								<Item
									isChecked={item.isChecked}
									title={item.title}
									key={item.id}
									itemId={item.id}
									deleteItem={onDeleteTaks}
									changeStatus={changeItemStatus}
								/>
							);
						})}
				</div>
			)}
		</section>
	);
}
