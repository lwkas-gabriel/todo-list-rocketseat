import { Header } from './components/Header'
import { InputList } from './components/InputList'
import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header/>
      <main className={styles.wrapper}>
        <InputList/>
      </main>
    </div>
  )
}

export default App
