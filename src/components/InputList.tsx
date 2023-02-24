import { PlusCircle } from 'phosphor-react';
import styles from './InputList.module.css';

export function InputList(){
    return (
        <form className={styles.form} action="">
            <input placeholder='Adicione uma nova tarefa' type="text" />
            <button>
                Enviar
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}