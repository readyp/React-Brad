import { useContext } from 'react';
import { AlertContext } from '../contexts/AlertContext';

function Alert() {
    const { alert } = useContext(AlertContext);

    if (alert !== null) {
        return <p className='font-bold text-red-500'>{alert.msg}</p>;
    }
}

export default Alert;
