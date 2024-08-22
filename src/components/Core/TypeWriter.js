import React, { useState, useEffect } from 'react';


export default function Typewriter ({ text1, text2, speed = 100 }){
    const [displayedText1, setDisplayedText1] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        if (index1 < text1.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText1(displayedText1 + text1[index1]);
                setIndex1(index1 + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index1, text1, displayedText1, speed]);

    useEffect(() => {
        if (index1 === text1.length && index2 < text2.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText2(displayedText2 + text2[index2]);
                setIndex2(index2 + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index2, text2, displayedText2, speed, index1, text1]);

    return <div>
        {displayedText1}<br/>
        <span className='text-tahiti-dark dark:text-tahiti'>{displayedText2}</span>
        
    </div>;
};

