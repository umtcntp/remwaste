import React from 'react';

function SkipOptionCard({ skip }) {
    const totalPrice = skip.price_before_vat + skip.vat;

    let imageSrc = '/images/skip_s.png';
    if (skip.size >= 15 && skip.size < 20) {
        imageSrc = '/images/skip_m.png';
    } else if (skip.size >= 20) {
        imageSrc = '/images/skip_l.png';
    }

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <img
                src={imageSrc}
                alt={`${skip.size} yard skip`}
                className="w-full max-h-32 object-contain p-2"
            />

            <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {skip.size} Yard Skip
                    </h2>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skip.size} yd
                    </span>
                </div>

                <p className="text-sm text-gray-600 mb-2">
                    {skip.hire_period_days} day hire
                </p>

                {!skip.allowed_on_road && (
                    <p className="text-xs text-red-600 font-medium">
                        🚫 Not allowed on the road
                    </p>
                )}
            </div>

            <div className="bg-green-50 border-t border-green-100 px-5 py-4 flex items-center justify-between">
                <span className="text-lg font-bold text-green-800">
                    £{totalPrice}
                </span>
                <button
                    onClick={() => console.log('Selected skip ID:', skip.id)}
                    className="bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-md font-medium"
                >
                    Select →
                </button>
            </div>
        </div>
    );
}

export default SkipOptionCard;
