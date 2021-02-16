function Button(props){
    return(
        <button className={props.className} id={props.id}>
            <i className={props.icon}></i> {props.label}
        </button>
    )
}
export default Button;