import React, { useState, useEffect } from 'react';
import StepIndicator from './StepIndicator';
import SkipOptionsList from './SkipOptionsList';

export default function ChooseSkipSize() {
    const [skips, setSkips] = useState([]);

    useEffect(() => {
        fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then((res) => res.json())
            .then(setSkips)
            .catch(console.error);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-green-600 p-6 text-white">
            <div className="max-w-6xl mx-auto">
                <StepIndicator currentStep={3} />

                <div className="text-center my-10">
                    <h1 className="text-4xl font-bold mb-2">Pick a Skip</h1>
                    <p className="text-md text-green-100">
                        Choose a skip that fits your needs best.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <SkipOptionsList skips={skips} />
                </div>
            </div>
        </div>
    );
}
