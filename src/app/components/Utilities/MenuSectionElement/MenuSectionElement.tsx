import styles from './MenuSectionElement.module.css'
export default function MenuSectionElement(ImageSrc:any, Title:any, ButtonLabel:any){
    return (
        <div className={`${styles.menuSectionElement}`}>
                <img src={ImageSrc} className={`${styles.menuSectionElement__image}`}></img>
                <div className={`${styles.menuSectionElement__title}`}>{Title}</div>
                <div className={`${styles.menuSectionElement__buttonLabel}`}>{ButtonLabel}</div>
        </div>
    )
}