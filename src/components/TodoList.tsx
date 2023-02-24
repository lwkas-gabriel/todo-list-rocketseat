import { ListItem } from './ListItem';
import styles from './TodoList.module.css';

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
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </li>
        </div>
    )
}