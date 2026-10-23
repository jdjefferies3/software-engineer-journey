/**
 * Represents a summary of a collection of scores.
 *
 * This type is used to describe aggregate score information in a single object,
 * allowing callers to quickly inspect the overall performance without needing
 * to process each individual score separately.
 *
 * @typedef {Object} ScoreSummary
 * @property {number} average - The arithmetic mean of all recorded scores.
 * @property {number} highest - The highest score found among the recorded results.
 * @property {number} passingCount - The total number of scores that meet the passing criteria.
 */
type ScoreSummary = {
    average: number;
    highest: number;
    passingCount: number;
};

// Function that calculates summary information for an array of scores.
function summarizeScores(scores: number[]): ScoreSummary {
    // If there are no scores, return a default summary with zero values.
    if (scores.length === 0) {
        return {
            average: 0,
            highest: 0,
            passingCount: 0,
        };
    }

    // Add all scores together to get the total.
    const total = scores.reduce((sum, score) => sum + score, 0);

    // Calculate the average score and round it to 2 decimal places.
    const average = Number((total / scores.length).toFixed(2));

    // Find the highest score in the list.
    const highest = Math.max(...scores);

    // Count how many scores are at least 60 (the passing threshold).
    const passingCount = scores.filter((score) => score >= 60).length;

    // Return the final summary object containing all calculated values.
    return {
        average,
        highest,
        passingCount,
    };
}

// Example data set to test the function.
const scores = [72, 55, 92, 75];

// Call the function and store the result.
const summary = summarizeScores(scores);

// Print the summary to the console.
console.log(summary);
// { average: 73.5, highest: 92, passingCount: 3 }