import "./ImgItem.css"
function ImgItem(props){
    const {info,clickImg} = props
    return(
        <div className="grid-item">
            <img onClick={()=>clickImg(info)} src = {info.thumnailBwUrl} ></img>
            <h4 className="title">{info.title}</h4>
            <p className="sub-title">"{info.description}"</p>
        </div>
    )
}

export default ImgItem; 