 // Frontend functionality
        document.addEventListener('DOMContentLoaded', function() {
            const generateBtn = document.getElementById('generate-btn');
            const notesInput = document.getElementById('notes-input');
            const cardsContainer = document.getElementById('cards-container');
            
            // Sample data for demonstration
            const sampleData = [
                {
                    question: "What process do plants use to convert sunlight into energy?",
                    answer: "Photosynthesis"
                },
                {
                    question: "What are mitochondria known as?",
                    answer: "The powerhouse of the cell"
                },
                {
                    question: "What is the largest organ in the human body?",
                    answer: "The skin"
                },
                {
                    question: "What is the chemical symbol for gold?",
                    answer: "Au"
                },
                {
                    question: "What planet is known as the Red Planet?",
                    answer: "Mars"
                }
            ];
            
            // Generate flashcards
            generateBtn.addEventListener('click', function() {
                const notes = notesInput.value.trim();
                
                if (notes === "") {
                    alert("Please enter some study notes first!");
                    return;
                }
                
                // Clear previous cards
                cardsContainer.innerHTML = "";
                
                // In a real application, this would call the backend API
                // For this demo, we'll use sample data
                simulateAPICall(notes);
            });
            
            // Simulate API call with timeout
            function simulateAPICall(notes) {
                generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

generateBtn.disabled = true;
                
                setTimeout(() => {
                    generateBtn.innerHTML = '<i class="fas fa-robot"></i> Generate Flashcards';
                    generateBtn.disabled = false;
                    
                    // Generate cards with sample data
                    sampleData.forEach((item, index) => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = 
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="card-icon"><i class="fas fa-question"></i></div>
                                    <p>Click to reveal question ${index + 1}</p>
                                </div>
                                <div class="card-back">
                                    <div class="question">${item.question}</div>
                                    <div class="answer">${item.answer}</div>
                                </div>
                            </div>
                        ;
                        
                        card.addEventListener('click', function() {
                            this.classList.toggle('flipped');
                        });
                        
                        cardsContainer.appendChild(card);
                    });
                }, 1500); // Simulate processing time
            }
            
            // Add click event to existing cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    this.classList.toggle('flipped');
                });
            });
        });