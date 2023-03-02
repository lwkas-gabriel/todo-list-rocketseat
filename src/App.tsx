import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { ListItem, ListItemType } from './components/ListItem'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

function App() {

  const [toDos, setToDos] = useState<ListItemType[]>([]);

  const [newToDoText, setNewToDoText] = useState('');

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    setToDos([...toDos, {todoText: newToDoText, isCompleted: false}]);
    setNewToDoText('');
  }

  function handleOnChangeText(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewToDoText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(deleteThis: string){
    const listWithoutDeletedTask = toDos.filter(tasks =>{
      return tasks.todoText !== deleteThis
    })

    setToDos(listWithoutDeletedTask);
  }

  const isNewToDoTextEmpty = newToDoText.length==0
  const isToDoListEmpty = toDos.length==0

  return (
    <div>
      <Header/>
      <main className={styles.wrapper}>
        <form className={styles.formNewTodo} action="#">
          <input
            value={newToDoText}
            onInvalid={handleNewTaskInvalid}
            onChange={handleOnChangeText}
            placeholder='Adicione uma nova tarefa'
            type="text"
          />
            <button
              type='submit'
              onClick={handleCreateNewTask}
              disabled={isNewToDoTextEmpty}
            >
              Enviar
              <PlusCircle size={16}/>
            </button>
        </form>
        <header className={styles.todoListHeader}>
            <div className={styles.counterContainer}>
              <p className={styles.todoTasksCreated}>Tarefas criadas</p><span className={styles.counter}>{toDos.length}</span>
            </div>
            <div>
              <p className={styles.todoFinishedTasks}>Concluídas</p>
              <span className={styles.counter}>
                0
              </span>
            </div>
        </header>
          <li className={styles.listContainer}>
            {
              toDos.map(todo => {
                return (
                  <ListItem item={todo} onDeleteTask={deleteTask}/>
                )
              })
            }
          </li>
      </main>
    </div>
  )
}

export default App
