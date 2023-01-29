import { useQuery } from 'react-query';
import { getUsersByUsername } from '../libs/GithubLibs';
import { useGithubStore } from '../store/GithubStore';
import ProfileItem from './ProfileItem';

function ProfileItemList() {
    const username = useGithubStore((state) => state.username);
    const { data, isLoading } = useQuery({
        queryKey: ['searchResult', username],
        queryFn: () => getUsersByUsername(username),
    });
    if (isLoading) {
        return <p className='font-bold'>Loading...</p>;
    }
    return (
        <div className='my-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {data?.map((item) => (
                <ProfileItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ProfileItemList;
