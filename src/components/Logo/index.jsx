import styles from './logo.module.css'
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <h1 className={`${styles.text} text-center text-sm-start text-white mb-0 d-flex align-center justify-content-center justify-content-md-start `}>
            M<img src={logo} className={`${styles.logo} align-top p-0 img-fluid object-fit-contain`}/>
            VIES</h1>
    )
}

export default Logo