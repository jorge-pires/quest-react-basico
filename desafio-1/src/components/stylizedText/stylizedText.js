import './stylizedText.css'

const StylizedText = ({children, color}) => {
    return(
        <div className="uppercase" style={{color: color}}>
            {children}
        </div>
    )
}

export default StylizedText