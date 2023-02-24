import { Header } from './components/Header'
import { InputList } from './components/InputList'
import styles from './App.module.css'
import './global.css'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <div>
      <Header/>
      <main className={styles.wrapper}>
        <InputList/>
        <TodoList/>
      </main>
    </div>
  )
}

export default App
