import "./Popup.css"
function PopUp(props) {
    const {img,clickImg} = props
    return(
        <div className="img-post">
            <div onClick={()=>clickImg(null)} className="img-post-bg">
                <div className="img-post-content">
                    <img className="img-item" src={img.thumnailUrl}></img>
                    <p className="img-description">{img.description}</p>
                </div>
            </div>
            
        </div>
    )
}
export default PopUp;