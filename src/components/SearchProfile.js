import { useQueryClient } from 'react-query';
import { useGithubStore } from '../store/GithubStore';

function SearchProfile() {
    const queryClient = useQueryClient();
    const { term, setTerm, setUsername, username } = useGithubStore(
        (state) => ({
            ...state,
        })
    );
    const handleSubmit = (e) => {
        e.preventDefault();

        if (term.length > 1) {
            setUsername(term);
        } else {
            alert('Isi Something Please...');
        }
    };
    const clearResult = () => {
        queryClient.setQueryData(['searchResult', username], null);
        setUsername('');
    };
    const searchResult = queryClient.getQueryData(['searchResult', username]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control relative'>
                    <input
                        className='input input-bordered'
                        type='text'
                        placeholder='Search Profile'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button className='absolute right-0 btn btn-ghost'>
                        Search
                    </button>
                </div>
            </form>
            <div
                className='my-3'
                hidden={searchResult?.length === 0 || !searchResult}
            >
                <button
                    className='btn btn-outline btn-error'
                    onClick={clearResult}
                >
                    clear
                </button>
            </div>
        </div>
    );
}

export default SearchProfile;
