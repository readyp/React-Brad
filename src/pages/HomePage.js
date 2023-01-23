import { useContext } from 'react';
import ProfileItem from '../components/ProfileItem';
import SearchProfile from '../components/SearchProfile';
import { ProfileContext } from '../contexts/ProfileContext';
import { useFetch } from '../hooks/useFetch';

function HomePage() {
    const { profiles } = useContext(ProfileContext);
    const { data, isError, isLoading, error } = profiles;
    console.log(profiles);
    return (
        <div className='container mx-auto px-4'>
            <SearchProfile />
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data?.items?.map((item) => (
                    <ProfileItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
