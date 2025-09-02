// Frontend JavaScript - Communication with Backend
const generateFlashcards = async (notes) => {
    try {
        const response = await fetch('http://localhost:5000/generate-flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ notes: notes })
        });
        
        const data = await response.json();
        return data.flashcards;
    } catch (error) {
        console.error('Error:', error);
        // Fallback to simulated flashcards if backend is unavailable
        return generateSimulatedFlashcards(notes);
    }
};

// This function would be called when the Generate button is clicked
document.getElementById('generate-btn').addEventListener('click', async () => {
    const notes = document.getElementById('notes-input').value;
    const flashcards = await generateFlashcards(notes);
    displayFlashcards(flashcards);
});