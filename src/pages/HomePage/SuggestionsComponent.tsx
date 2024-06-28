import React from 'react';
import SuggestionCard from './SuggestionCard';

const Suggestions: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Heading */}
            <h3 className="justify-center items-center">Not sure where to start? Here's a couple recommendations!</h3>
            <div className="flex w-3/4 justify-between items-center py-4 px-4">
                <SuggestionCard BookTitle='Book1' />
                <SuggestionCard BookTitle='Book2' />
                <SuggestionCard BookTitle='Book3' />
            </div>
        </div>
    );
};

export default Suggestions;