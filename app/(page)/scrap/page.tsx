'use client'// Import necessary dependencies
import {useState} from 'react';
import {getQuizlet} from '@/app/ui/actions';

// Define the component
const Page = () => {
    // State to hold the input value
    const [quizletValue, setQuizletValue] = useState('');

    // Function to handle form submission
    const handleSubmit = (event: any) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Call your action with the quizlet value
        getQuizlet(quizletValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Use value and onChange to control the input */}
                <input
                    type="text"
                    name="quizlet"
                    value={quizletValue}
                    onChange={(e) => setQuizletValue(e.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

// Export the component
export default Page;
