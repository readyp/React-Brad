import ProfileItemList from '../components/ProfileItemList';
import SearchProfile from '../components/SearchProfile';

function HomePage() {
    return (
        <div className='container mx-auto px-4'>
            <SearchProfile />
            <ProfileItemList />
        </div>
    );
}

export default HomePage;
