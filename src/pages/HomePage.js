import ProfileItemList from '../components/ProfileItemList';
import SearchProfile from '../components/SearchProfile';
import { useGithubStore } from '../store/GithubStore';

function HomePage() {
    const username = useGithubStore((state) => state.username);
    return (
        <div className='container mx-auto p-2'>
            <SearchProfile />
            {username && <ProfileItemList />}
        </div>
    );
}

export default HomePage;
