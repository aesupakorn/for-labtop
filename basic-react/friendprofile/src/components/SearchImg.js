import "./SearchImg.css"
function SearchImg(prop){
    const{imgShow,set} = prop
    
    return( <div className="container"><input className="serch-input" type="text" placeholder="กรอกชื่อที่ต้องการค้นหา"
            value={imgShow} 
            onInput={(event)=>set(event.target.value)}>
            </input></div>)
}
export default SearchImg;