import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GithubContext } from '../context/GithubContext';
import { FaCodepen, FaStore, FaUsers, FaUserFriends, FaArrowLeft } from 'react-icons/fa';
import ReposItemList from '../components/repos/ReposItemList';

function UserPage() {
    const { login } = useParams();
    const { user, getOneUser, loading } = useContext(GithubContext);

    console.log(login);
    console.log(user);

    useEffect(() => {
        getOneUser(login);
    }, []);

    // console.log(user);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className='relative w-10/12 mx-auto flex flex-col justify-center'>
            <div className='my-4'>
                <Link to={'/'} className='btn btn-active space-x-2'>
                    <FaArrowLeft />
                    <span>Back to search</span>
                </Link>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 mb-8'>
                <div className='card image-full'>
                    {/* img */}
                    <figure>
                        <img className='w-full' src={user?.avatar_url} alt='' />
                    </figure>
                    <div className='card-body justify-end'>
                        <h2 className='card-title text-white'>{user?.name}</h2>
                        <h2 className='card-title text-white text-sm'>
                            {user?.login}
                        </h2>
                    </div>
                </div>
                {/* content */}
                <div className='col-span-2'>
                    <div className='mb-6'>
                        <h1 className='text-3xl card-title mb-4'>
                            {user?.name}
                            <div className='ml-2 badge badge-success badge-outline'>
                                {user?.type}
                            </div>
                            {user?.hireable && (
                                <div className='mx-2 badge badge-info'>
                                    Hireable
                                </div>
                            )}
                        </h1>
                        <p className='max-w-md'>{user?.bio || 'No bio.'}</p>
                        <a
                            href={user?.html_url}
                            target='_blank'
                            rel='noreferrer'
                            className='btn btn-outline my-4 w-fit'
                        >
                            Visit github page
                        </a>
                    </div>

                    <div className='stats shadow-xl stats-vertical w-full md:stats-horizontal'>
                        <div className='stat'>
                            <div className='stat-title'>Location</div>
                            <div className='stat-desc text-white'>
                                {user?.location || 'No data'}
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='stat-title'>Website</div>
                            <div className='stat-desc text-white'>
                                <a
                                    href={`http://${user?.blog}`}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {user?.blog || 'No data'}
                                </a>
                            </div>
                        </div>
                        <div className='stat'>
                            <div className='stat-title'>Twitter</div>
                            <div className='stat-desc text-white'>
                                {user?.twitter_username || 'No data'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats shadow-xl stats-vertical lg:stats-horizontal'>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaUsers className='text-3xl' />
                    </div>
                    <div className='stat-title'>Followers</div>
                    <div className='stat-value'>
                        {user?.followers || 'No Data'}
                    </div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaUserFriends className='text-3xl' />
                    </div>
                    <div className='stat-title'>Following</div>
                    <div className='stat-value'>
                        {user?.following || 'No Data'}
                    </div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaCodepen className='text-3xl' />
                    </div>
                    <div className='stat-title'>Public Repos</div>
                    <div className='stat-value'>{user?.public_repos}</div>
                </div>
                <div className='stat'>
                    <div className='stat-figure text-secondary'>
                        <FaStore className='text-3xl' />
                    </div>
                    <div className='stat-title'>Public Gist</div>
                    <div className='stat-value'>{user?.public_gists}</div>
                </div>
            </div>

            <ReposItemList login={login} />
        </div>
    );
}

export default UserPage;
