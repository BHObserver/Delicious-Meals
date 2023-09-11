// equations/category1/time-and-motion/work-sampling.js

// Function to calculate average time using work sampling equation
export function calculateWorkSamplingAverageTime(observationTaskX, totalObservations, totalTimePeriod) {
    const averageTime = (observationTaskX / totalObservations) * totalTimePeriod;
    return averageTime;
}
