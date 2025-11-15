// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Get the value of the selected answer
    const userAnswer = selectedOption.value;

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
