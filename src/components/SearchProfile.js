import { useContext } from 'react';
import { useState } from 'react';
import { AlertContext } from '../contexts/AlertContext';
import { ProfileContext } from '../contexts/ProfileContext';
import Alert from './Alert';

function SearchProfile() {
    const [term, setTerm] = useState('');
    const { getSearchProfile, clearResult, users } = useContext(ProfileContext);
    const { setAlert } = useContext(AlertContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term) {
            // alert('Isi something');
            setAlert('Please fill something', 'error');
        } else {
            getSearchProfile(term);
        }

        setTerm('');
    };
    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 my-4'>
            <Alert />
            <form onSubmit={handleSubmit}>
                <div className='relative form-control'>
                    <input
                        type='text'
                        placeholder='Search profile'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className='input input-bordered'
                    />
                    <button className='btn btn-ghost absolute right-0'>
                        Search
                    </button>
                </div>
            </form>
            <button
                onClick={clearResult}
                className={`btn w-fit ${
                    users?.users?.length === 0 || !users?.users ? 'hidden' : ''
                }`}
                disabled={!users?.users || users?.users?.length === 0}
            >
                Clear
            </button>
        </div>
    );
}

export default SearchProfile;
