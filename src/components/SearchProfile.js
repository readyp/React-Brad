import { useState } from 'react';
import { useContext } from 'react';
import { AlertContext } from '../contexts/AlertContext';
import { ProfileContext } from '../contexts/ProfileContext';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

function SearchProfile() {
    const { setUrl } = useContext(ProfileContext);
    const { alert, setAlert } = useContext(AlertContext);
    const [term, setTerm] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term) {
            // alert('Please provide some info');
            setAlert('Please fill username', 'error');
        } else {
            setUrl(`${GITHUB_URL}/search/users?q=${term}`);
        }

        setTerm('');
    };
    return (
        <div className='container mx-auto my-8'>
            {alert !== null && (
                <p className='text-red-500 font-bold my-4'>{alert.message}</p>
            )}
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                <form onSubmit={handleSubmit}>
                    <div className='relative form-control w-full'>
                        <input
                            className='input input-bordered input-accent w-full'
                            type='text'
                            placeholder='Search Profile'
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                        <button className='absolute top-0 right-0 btn btn-ghost'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchProfile;
