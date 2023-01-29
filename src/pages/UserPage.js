import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../libs/GithubLibs';
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa';
import ReposItemList from '../components/repos/ReposItemList';

function UserPage() {
    const { login } = useParams();
    const {
        data: user,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['username', login],
        queryFn: () => getOneUser(login),
    });
    if (isLoading) {
        return <p>Loading....</p>;
    }
    if (isError) {
        return <p className='text-red-500 font-bold'>{error.toString()}</p>;
    }
    return (
        <>
            <div className='card min-h-16 card-side bg-base-200 shadow-lg flex-col sm:flex-row p-2'>
                <figure className='w-40 h-40 rounded-full mx-auto sm:mt-8'>
                    <img src={user.avatar_url} alt={`user ${user.login}`} />
                </figure>
                <div className='card-body mx-2'>
                    <h2 className='card-title'>
                        {user.name}
                        <span className='badge badge-outline badge-success badge-sm'>
                            {user.type}
                        </span>
                        {user?.hireable && (
                            <span className='badge badge-info badge-sm'>
                                Hireable
                            </span>
                        )}
                    </h2>
                    <p className='badge badge-outline'>{user.login}</p>
                    <p className='max-w-sm'>{user.bio || 'No biografi.'}</p>
                    <a
                        href={user.url}
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-outline btn-info w-fit'
                    >
                        Visit github link
                    </a>
                    <div className='stats mt-4 stats-vertical md:stats-horizontal'>
                        <div className='stat'>
                            <div className='stat-title'>Location</div>
                            <div className='stat-desc'>
                                {user.location || 'No data'}
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='stat-title'>Blog</div>
                            <div className='stat-desc'>
                                {user.blog || 'No data'}
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='stat-title'>Company</div>
                            <div className='stat-desc'>
                                {user.company || 'No data'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats shadow-lg my-8 bg-base-200 stats-vertical md:stats-horizontal'>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaUsers className='text-4xl hidden lg:block' />
                    </div>
                    <div className='stat-title'>Followers</div>
                    <div className='stat-value'>{user.followers}</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaUserFriends className='text-4xl hidden lg:block' />
                    </div>
                    <div className='stat-title'>Following</div>
                    <div className='stat-value'>{user.following}</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaCodepen className='text-4xl hidden lg:block' />
                    </div>
                    <div className='stat-title'>Public Repos</div>
                    <div className='stat-value'>{user.public_repos}</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaStore className='text-4xl hidden lg:block' />
                    </div>
                    <div className='stat-title'>Public Gist</div>
                    <div className='stat-value'>{user.public_gists}</div>
                </div>
            </div>
            <ReposItemList />
        </>
    );
}

export default UserPage;
