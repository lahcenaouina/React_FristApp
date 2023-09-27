import {useState , useEffect} from "react";

const useWindowSize = () => {

    const [WindowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect( () => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleSize();
        window.addEventListener('resize', handleSize);

        return () => {
            console.log("Run if Dep changes");
            window.removeEventListener('resize', handleSize);
        }

    } , [])

    return WindowSize;

};

export default useWindowSize;
