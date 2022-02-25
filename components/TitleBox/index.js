import styles from './style.module.css'

export default function TitleBox({title}){
    return (
    <div className={styles.container}>
        <span>{title}</span>
        <div className={styles.borderBox}></div>
    </div>)
}