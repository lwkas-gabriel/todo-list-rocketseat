import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { ListItem, ListItemType } from './components/ListItem'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

function App() {

  const [toDos, setToDos] = useState<ListItemType[]>([]);

  const [newToDoText, setNewToDoText] = useState('');

  function headerSelector(){
    let countCompleted = 0

    if(toDos.length == 0){
      return '0'
    }else{
      toDos.map(todo => {
        if(todo.isCompleted){
          countCompleted++;
        }
        return countCompleted;
      })
      return `${countCompleted} de ${toDos.length}`
    }
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    setToDos([...toDos, {id: new Date(), todoText: newToDoText, isCompleted: false}]);
    setNewToDoText('');
  }

  function handleOnChangeText(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewToDoText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function changeStateTask(text:string, state:boolean){
    const completedTasksList = toDos.map(todo =>{
      if(todo.todoText === text){
        todo.isCompleted == state;
      }
      return todo;
    })
    setToDos(completedTasksList);
  }

  function deleteTask(deleteThis: Date){
    const listWithoutDeletedTask = toDos.filter(tasks =>{
      return tasks.id !== deleteThis
    })

    setToDos(listWithoutDeletedTask);
  }

  const isNewToDoTextEmpty = newToDoText.length==0
  //const isToDoListEmpty = toDos.length==0

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
                {
                  headerSelector()
                }
              </span>
            </div>
        </header>
          <ul className={styles.listContainer}>
            {
              toDos.map(todo => {
                return (
                  <ListItem item={todo} onChangeState={changeStateTask} onDeleteTask={deleteTask}/>
                )
              })
            }
          </ul>
      </main>
    </div>
  )
}

export default App
