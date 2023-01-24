import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getProfilesByUsername } from '../libs/ProfilesLib';

function SearchComponent() {
    const queryClient = useQueryClient();
    const {refetch} = useQuery({
        queryKey: ['profiles'],
        queryFn: () => getProfilesByUsername(term),
        enabled: false,
        refetchOnWindowFocus: false
    })
    const [term, setTerm] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!term) {
            alert('Isi something please');
        } else {
            refetch()
        }
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-8'>
            <form className='relative' onSubmit={handleSubmit}>
                <div className='flex'>
                    <input
                        className='input input-bordered flex-1'
                        type='text'
                        placeholder='search username'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button className='btn btn-ghost absolute right-0'>
                        Search
                    </button>
                </div>
            </form>
            <button className='btn w-fit' onClick={() => {
                queryClient.setQueryData(['profiles'], [])
            }}>Clear</button>
        </div>
    );
}

export default SearchComponent;
