import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./App.module.css";

export function App() {
	const [itemList, setItemList] = useState<any[]>([]);

	const totalTasks = itemList.length;

	const completeTasks = itemList.filter((item) => {
		return item.isChecked === true;
	});

	const totalCompleteTasks = completeTasks.length;

	const [newItemList, setNewItemList] = useState({});

	function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("Preencha o campo para publicar!");
	}

	function handleNewItemChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");

		let newItemId = uuidv4();
		let newItemTitle = event.target.value;


		setNewItemList({ id: newItemId, title: newItemTitle, isChecked: false });
	}

	function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setItemList([newItemList, ...itemList]);

		const resetForm = event.target as HTMLFormElement;
		resetForm.reset()
	}

	function deleteTask(taskToDelete: string) {
		const taksWithoutDeletedOne = itemList.filter((item) => {
			return item.id !== taskToDelete;
		});

		setItemList(taksWithoutDeletedOne);
	}

	function handleCheckTask(taskId: string) {
		const taksChangedStatus = itemList.map((obj) => {
			if (obj.id === taskId) {
				return { ...obj, isChecked: !obj.isChecked };
			}

			return obj;
		});

		setItemList(taksChangedStatus);
		// console.log(taksChangedStatus)
	}

	return (
		<div className='box'>
			<Header />

			<div className={styles.content}>
				<form className={styles.newTask} onSubmit={handleCreateNewTask}>
					<input
						type='text'
						placeholder='Adicionar uma nova tarefa'
						onInvalid={handleNewTaskInvalid}
						onChange={handleNewItemChange}
						required
					/>
					<button>
						Criar
						<PlusCircle size={18} />
					</button>
				</form>

				<Tasks
					itens={itemList}
					onDeleteTaks={deleteTask}
					totalTasks={totalTasks}
					totalCompleteTasks={totalCompleteTasks}
					changeItemStatus={handleCheckTask}
				/>
			</div>
		</div>
	);
}
