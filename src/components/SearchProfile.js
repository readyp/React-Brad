import { useContext } from 'react';
import { useState } from 'react';
import { AlertContext } from '../context/AlertContext';
import { GithubContext } from '../context/GithubContext';

function SearchProfile() {
    const [term, setTerm] = useState('');
    const { getUsersByUsername, users, clearResult } =
        useContext(GithubContext);
    const { alert, setAlert, clearAlert } = useContext(AlertContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (term?.length > 2) {
            getUsersByUsername(term);
            clearAlert();
        } else {
            // alert('Please fill something');
            setAlert('please fill something', 'error');
        }

        setTerm('');
    };
    return (
        <div className='my-8 max-w-lg'>
            {alert?.message && (
                <p className='pl-4 my-2 text-red-500 font-bold'>
                    {alert.message}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className='relative form-control'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='input input-bordered'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button className='absolute btn btn-ghost right-0'>
                        Search
                    </button>
                </div>
            </form>
            <div
                className='my-4'
                hidden={users?.length === 0 || users === null}
            >
                <button onClick={clearResult} className='btn btn-outline'>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default SearchProfile;
