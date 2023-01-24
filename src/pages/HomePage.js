import ProfileItemList from '../components/ProfileItemList';
import SearchComponent from '../components/SearchComponent';

function HomePage() {
    return (
        <div className='container mx-auto px-4'>
            <SearchComponent />
            <ProfileItemList />
        </div>
    );
}

export default HomePage;
