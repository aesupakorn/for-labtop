//import styles from'./Notification.module.css'; ไม่ต้องใช้ตัวนี้แล้ว เพราะเขียนstyle ในนี้ได้เลย
import styles from "styled-components"
function Notification(props){
    const {description, title ,caution} = props;
    return(
        <Layout caution={caution}>
            <Title caution={caution}>{title}</Title>
            <p>{description}</p>
            <p><a href="#">ปิดการแจ้งเตือน</a></p>
        </Layout>
    )
}
function colorLevel(props){
    const {caution}  = props ;
    if(caution === "danger") return "red";
    return "black";
}
const Layout = styles.div`
    background-color: white;
    border:2px solid ${props => colorLevel(props)};
    padding: 8px 16px;
    margin: 10px;
`
const Title = styles.h3`
    color:${props => colorLevel(props)};
`


export default Notification;