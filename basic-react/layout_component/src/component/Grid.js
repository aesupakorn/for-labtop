import './Grid.css'
function Grid(props){
    let Class = `grid grid-${props.ncolumn}`;
    
    return(
    <div className={Class}>
        {props.children}
    </div>
    )
}

export default Grid; 