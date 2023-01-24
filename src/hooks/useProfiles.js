// ONLY FOR TESTING
import { useQuery } from 'react-query';
import { getAllProfiles } from '../libs/ProfilesLib';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useProfiles = () => {
    const profiles = useQuery({
        queryKey: ['profiles'],
        queryFn: () => getAllProfiles(`${GITHUB_URL}/users`, GITHUB_TOKEN),
        enabled: false,
        refetchOnWindowFocus: false,
    });

    return profiles;
};
