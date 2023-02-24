import styles from './TodoList.module.css';
import { Trash } from 'phosphor-react'

export function TodoList(){
    return (
        <div className={styles.container}>
            <header className={styles.todoHeader}>
                <div>
                    <p className={styles.todoTasksCreated}>Tarefas criadas</p><span>0</span>
                </div>
                <div>
                    <p className={styles.todoFinishedTasks}>Concluídas</p><span>0</span>
                </div>
            </header>
            <li className={styles.listContainer}>
                <ul className={styles.listItem}>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                    <button><Trash /></button>
                </ul>
            </li>
        </div>
    )
}