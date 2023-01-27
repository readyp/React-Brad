import { useQuery } from 'react-query';
import { getAllUsersByUsername } from '../libs/GithubLibs';
import { useGithubStore } from '../store/GithubStore';
import ProfileItem from './ProfileItem';

function ProfileItemList() {
    const term = useGithubStore((state) => state.term);
    const { data, isError, error, isFetching } = useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUsersByUsername(term),
        refetchOnWindowFocus: false,
        enabled: false,
    });
    if (isError) {
        return (
            <h2 className='font-bold text-red-500 text-center'>
                {error.toString()}
            </h2>
        );
    }
    return (
        <div className='container mx-auto px-4'>
            {isFetching && <h2 className='font-bold my-8'>Loading...</h2>}
            {data?.length === 0 && (
                <h2 className='font-bold text-center'>Result not found</h2>
            )}
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {data?.map((item) => (
                    <ProfileItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default ProfileItemList;
