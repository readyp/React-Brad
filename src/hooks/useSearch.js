import { useQueryClient, useQuery } from 'react-query';
import { getProfilesByUsername } from '../libs/ProfilesLib';

const useSearch = (username) => {
    const queryClient = useQueryClient();
    useQuery({
        queryKey: ['profiles', username],
        queryFn: () => getProfilesByUsername(username),
        initialData: () => {
            return queryClient.getQueryData(['profiles', username]);
        },
    });
};

export default useSearch;
