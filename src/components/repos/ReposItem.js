import { FaEye, FaStar, FaInfo, FaUtensils } from 'react-icons/fa';

function ReposItem({ item }) {
    return (
        <div className='bg-base-300 rounded p-2 my-2'>
            <p>{item.name}</p>
            <p className='text-xs italic mb-2'>{item.description}</p>
            <div className='space-x-2'>
                <div className='badge badge-outline badge-info space-x-2'>
                    <FaEye />
                    <span>{item.watchers_count}</span>
                </div>
                <div className='badge badge-outline badge-success space-x-2'>
                    <FaStar />
                    <span>{item.stargazers_count}</span>
                </div>
                <div className='badge badge-outline badge-error space-x-2'>
                    <FaInfo />
                    <span>{item.open_issues_count}</span>
                </div>
                <div className='badge badge-outline badge-warning space-x-2'>
                    <FaUtensils />
                    <span>{item.forks_count}</span>
                </div>
            </div>
        </div>
    );
}

export default ReposItem;
