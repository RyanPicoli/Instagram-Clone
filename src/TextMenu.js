export default  function TextMenu(props) {
    return(
        <li className='text-menu'>
            <span>{props.icon}</span>
            <span>{props.nome}</span>
        </li>
    )
}
