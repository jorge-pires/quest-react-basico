const alertMessage = (label) => {
    alert(`A label desse botão é ${label}`)
  }

const Button = ({label}) => {
    return(
        <button onClick={() => alertMessage(label)}>Clique aqui</button>
    )
}

export default Button