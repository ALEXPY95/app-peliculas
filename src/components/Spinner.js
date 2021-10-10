import {FaSpinner} from 'react-icons/fa'
import Styles from './Spinner.module.css'

function Spinner() {
    return (
        <div className={Styles.container}>
            <FaSpinner className={Styles.spinning} size="50"/>
        </div>
    )
}

export default Spinner

