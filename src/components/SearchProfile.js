import { useQuery, useQueryClient } from 'react-query';
import { useGithubStore } from '../store/GithubStore';

function SearchProfile() {
    const [term, setTerm, clearTerm] = useGithubStore((state) => [
        state.term,
        state.setTerm,
        state.clearTerm,
    ]);
    const queryClient = useQueryClient();
    const { data: users } = useQuery({
        queryKey: ['users'],
        enabled: false,
        refetchOnWindowFocus: false,
    });
    const clearUsers = () => {
        queryClient.setQueryData(['users'], null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (term?.length > 2) {
            queryClient.fetchQuery(['users']);
        } else {
            alert('isi something donk');
        }

        clearTerm();
    };
    return (
        <div className='my-8'>
            <div className='container mx-auto px-4'>
                <form onSubmit={handleSubmit}>
                    <div className='relative form-control'>
                        <input
                            type='text'
                            placeholder='Search profile'
                            value={term}
                            onChange={setTerm}
                            className='input input-bordered'
                        />
                        <button className='absolute right-0 btn btn-ghost'>
                            Search
                        </button>
                    </div>
                </form>
                <div
                    className='my-4'
                    hidden={
                        users === null ||
                        users?.length === 0 ||
                        users === undefined
                    }
                >
                    <button onClick={clearUsers} className='btn btn-outline'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchProfile;
