import { useContext, useEffect } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import ProfileItem from './ProfileItem';

function ProfileItemList() {
    const { users } = useContext(ProfileContext);
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {users?.users?.map((item) => (
                <ProfileItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ProfileItemList;
