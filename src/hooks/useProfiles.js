// ONLY FOR TESTING
import { useQueryClient, useQuery } from 'react-query';
import { getAllProfiles } from '../libs/ProfilesLib';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useProfiles = () => {
    const queryClient = useQueryClient();
    const profiles = useQuery({
        queryKey: ['profiles'],
        queryFn: () => getAllProfiles(`${GITHUB_URL}/users`, GITHUB_TOKEN),
        initialData: () => {
            return queryClient.getQueryData(['profiles']);
        },
    });

    return profiles;
};
