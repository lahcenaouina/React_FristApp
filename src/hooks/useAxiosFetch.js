import {useEffect, useState} from 'react';
import axios from 'axios';

const useAxiosFetch = (DataUrl) => {
    const [Data, setData] = useState([]);
    const [FetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source();

        const FetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null)
                }
            } catch (error) {
                setFetchError(error.message)
                setData([]);
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 1000)
            }

        };
        FetchData(DataUrl);

        return () => {
            console.log('clean up function ')
            isMounted = false
            source.cancel();
        };

    }, [DataUrl]);

    return {Data, FetchError, isLoading}

}

export default useAxiosFetch;