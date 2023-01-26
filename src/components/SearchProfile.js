import { useContext } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GithubContext } from '../context/github/GithubContext';

function SearchProfile() {
    const [term, setTerm] = useState('');
    const { users, getAllUsersByUsername, clearResult } =
        useContext(GithubContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (term?.length > 2) {
            getAllUsersByUsername(term);
        } else {
            alert('Isi something dong');
        }

        setTerm('');
    };
    return (
        <div className='my-8 lg:max-w-4xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='relative form-control'>
                    <input
                        type='text'
                        placeholder='Search Profile'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className='input input-bordered'
                    />
                    <button className='absolute right-0 btn btn-ghost'>
                        <FaSearch />
                    </button>
                </div>
            </form>
            <div
                className='my-4'
                hidden={users === null || users?.length === 0}
            >
                <button onClick={clearResult} className='btn btn-outline'>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default SearchProfile;
