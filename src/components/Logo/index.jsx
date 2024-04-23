import styles from './logo.module.css'
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <h1 className={`${styles.text} text-start `}>M<img src={logo} className={`${styles.logo} w-25 align-top p-0`}/>VIES</h1>
    )
}

export default Logo