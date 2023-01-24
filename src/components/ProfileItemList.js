import { useProfiles } from '../hooks/useProfiles';
import ProfileItem from './ProfileItem';

function ProfileItemList() {
    const { isError, error, isLoading, data } = useProfiles();

    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {isLoading && <h2 className='text-2xl text-center'>Loading...</h2>}
            {isError && (
                <h2 className='text-2xl text-center font-bold text-red-500'>
                    {error.toString()}
                </h2>
            )}
            {data?.map((item) => (
                <ProfileItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ProfileItemList;
