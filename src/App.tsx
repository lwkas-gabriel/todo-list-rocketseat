import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { PlusCircle } from 'phosphor-react'
import { ListItem } from './components/ListItem'

function App() {

  const toDos: string[] = [
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames intege2.",
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer3.",
  ]

  return (
    <div>
      <Header/>
      <main className={styles.wrapper}>
        <form className={styles.formNewTodo} action="#">
          <input placeholder='Adicione uma nova tarefa' type="text" />
            <button>
              Enviar
              <PlusCircle size={16}/>
            </button>
        </form>
        <header className={styles.todoListHeader}>
            <div>
              <p className={styles.todoTasksCreated}>Tarefas criadas</p><span className={styles.counter}>{toDos.length}</span>
            </div>
            <div>
              <p className={styles.todoFinishedTasks}>Concluídas</p><span className={styles.counter}>0</span>
            </div>
        </header>
          <li className={styles.listContainer}>
            {
              toDos.map(todo => {
                return (
                  <ListItem todoText={todo}/>
                )
              })
            }
          </li>
      </main>
    </div>
  )
}

export default App
