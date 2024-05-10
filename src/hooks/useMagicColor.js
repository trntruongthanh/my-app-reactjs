import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {

    const COLOR_LIST = ['red', 'green', 'yellow', 'blue', 'magenta', 'orange', 'pink'];

    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {

        newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
    }   

    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {

    const [color, setColor] = useState('transparent');

    const colorRef = useRef('transparent');

    // change color every one second
    useEffect(() => {

        const colorInterval = setInterval(() => {

            // console.log('first color: ', color);
            // console.log('changed color: ', colorRef.current);

            const newColor = randomColor(colorRef.current);

            setColor(newColor);

            colorRef.current = newColor;

        }, 1000)

        return () => {

            clearInterval(colorInterval);
        }

    }, [])

    return color;
}

export default useMagicColor;