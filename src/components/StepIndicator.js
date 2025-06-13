import React from 'react';

const steps = [
    "Postcode",
    "Waste Type",
    "Select Skip",
    "Permit Check",
    "Choose Date",
    "Payment"
];

export default function StepIndicator({ currentStep }) {
    return (
        <nav className="flex justify-center space-x-6 mb-8">
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <div
                        key={step}
                        className={`flex items-center space-x-2 cursor-pointer ${isActive ? 'text-blue-600 font-bold' : 'text-gray-400'
                            }`}
                    >
                        <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${isCompleted ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-400'
                                }`}
                        >
                            {stepNumber}
                        </div>
                        <span className="hidden sm:inline">{step}</span>
                    </div>
                );
            })}
        </nav>
    );
}
