import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { ListItem } from './components/ListItem'
import { useState } from 'react'

function App() {

  const [toDos, setToDos] = useState([
    "teste1", "teste2"
  ]);

  function deleteTask(deleteThis: string){
    const listWithoutDeletedTask = toDos.filter(tasks =>{
      return tasks !== deleteThis
    })

    setToDos(listWithoutDeletedTask);
  }

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
                  <ListItem todoText={todo} onDeleteTask={deleteTask}/>
                )
              })
            }
          </li>
      </main>
    </div>
  )
}

export default App
