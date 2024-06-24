const Button = (props) => {
    console.log(props)
    return (
        <div>
            <button>{props.value}</button>
        </div>
    )
}
export default Button