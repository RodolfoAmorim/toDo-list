import { PlusCircle } from 'phosphor-react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import styles from './App.module.css'

export function App() {
  return (
    <div className='box'>
      <Header />

      <div className={styles.content}>
        <form className={styles.newTask}>
          <input type="text" placeholder='Adicionar uma nova tarefa' />
          <button>
            Criar
            <PlusCircle size={18} />
          </button>
        </form>

        <Tasks />
      </div>
    </div>
  )
}
