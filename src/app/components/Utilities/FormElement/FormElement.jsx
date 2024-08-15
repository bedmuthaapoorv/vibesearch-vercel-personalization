import styles from './FormElement.module.css'
export default function formElement({ label = '', placeholder = '', isPassword = true, tip = '', setState, state}) {
    
    return <div className={`${styles.formElement}`}>
        <div className={`${styles.formElement__label} montserrat fontWeight500`}>
            {label}
        </div>
        <div className={`${styles.formElement__input} inter500`}>
            <input id={label+'__input'} placeholder={placeholder} className={`${styles.input__element}`} style={{ WebkitTextSecurity: isPassword ? 'disc' : ''}} contentEditable="true" onChange={()=>{
                let text=document.getElementById(label+'__input').value
                let newState={...state}
                newState[label]=text
                setState(newState)
            }}>
                
            </input>
        </div>
        <div className={`${styles.formElement__tip} inter500`}>
            {tip}
        </div>
    </div>
}