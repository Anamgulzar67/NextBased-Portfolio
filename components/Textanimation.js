import React, { useEffect, useState } from 'react';

const TypewriterEffect = () => {
    const text = "Web Developer";
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDeleting) {
                if (index > 0) {
                    setDisplayedText((prev) => prev.slice(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsDeleting(false);
                }
            } else {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex(index + 1);
                } else {
                    setIsDeleting(true);
                }
            }
        }, isDeleting ? 200 : 500); // Speed for deleting vs typing

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);

    return <span className="text-accent">{displayedText}</span>;
};

export default TypewriterEffect;
