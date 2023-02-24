import styles from './Header.module.css'
import logo from '../assets/logo-todo-list.png'

export function Header(){
    return (
        <header className={styles.pageHeader}>
            <img className={styles.pageLogo} src={logo} alt="" />
        </header>
    )
}