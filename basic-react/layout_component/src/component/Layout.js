import styles from'./Layout.module.css'; /* ถ้าไม่เรียกแบบนี้ เวลาclassName ซ้ำกันในcss มันจะใช้มั่วๆผสมกัน ถ้าอยากให้ใช้อิสระต่อกันต้อง .module.css*/ 

function Layout(props){
    return(
        <div className={styles.layout}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default Layout;