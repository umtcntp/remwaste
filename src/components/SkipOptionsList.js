import React from 'react';
import SkipOptionCard from './SkipOptionCard';

export default function SkipOptionsList({ skips }) {
    if (!skips.length) return <p>Loading skips...</p>;

    return (
        <>
            {skips.map((skip) => (
                <SkipOptionCard key={skip.id} skip={skip} />
            ))}
        </>
    );
}
