import { useContext } from 'react';
import { useState } from 'react';
import { GithubContext } from '../context/GithubContext';

function SearchProfile() {
    const [term, setTerm] = useState('');
    const { getUsersByUsername, users, clearResult } =
        useContext(GithubContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (term?.length > 2) {
            getUsersByUsername(term);
        } else {
            alert('Please fill something');
        }

        setTerm('');
    };
    return (
        <div className='my-8'>
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
