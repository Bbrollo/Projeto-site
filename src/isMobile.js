import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1008);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1008);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
