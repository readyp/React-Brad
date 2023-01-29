import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getUserRepos } from '../../libs/GithubLibs';
import ReposItem from './ReposItem';

function ReposItemList() {
    const { login } = useParams();
    const { data: repos } = useQuery({
        queryKey: ['repos', login],
        queryFn: () => getUserRepos(login),
    });
    return (
        <div className='bg-base-200 shadow-lg rounded-lg p-4'>
            <h2 className='text-4xl font-bold mb-8'>Latest Repos</h2>
            {repos?.map((item) => (
                <ReposItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ReposItemList;
