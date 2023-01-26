import { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import ProfileItem from './ProfileItem';

function ProfileItemList() {
    const { users, loading, error } = useContext(GithubContext);

    if (loading) {
        return <h2 className='font-bold'>Loading...</h2>;
    }
    if (error) {
        return (
            <h2 className='text-2xl font-bold text-red-500'>
                {error.toString()}
            </h2>
        );
    }
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {users?.map((item) => (
                <ProfileItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ProfileItemList;
