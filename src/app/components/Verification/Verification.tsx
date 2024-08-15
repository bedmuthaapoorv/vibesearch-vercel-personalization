import styles from './Verification.module.css'
import Link from 'next/link'
import Resources from '@/app/resources/resources'

export default function Verification() {
    return (
        <div className={`${styles.verification}`}>
            <Link href={'/components/HomeScreen'}><img src={Resources.backIcon.src} className={`${styles.verification__backIcon}`}></img></Link>
            <div className={`${styles.signup__logo} vibeTitle`}>
                VIBE
            </div>
            <div className={`${styles.verification__mainContent}`}>
                <div className={`${styles.mainContent__title} montserrat fontWeight600`}>
                    Verification
                </div>
                <div className={`${styles.mainContent__desc} montserrat fontWeight400`}>
                    we have sent an verification link to your email please click on the link shared to your email to complete verification
                </div>
            </div>
            <Link href={'https://mail.google.com'} target='_blank'>
                <div className={`${styles.verification__button} blackButton`}>
                    Go to mail
                </div>
            </Link>
        </div>
    )
}