import './style.css';
import { calculateEquation1 } from './equations/category1/basic-time-study/equation1';
/* import { calculateWorkSamplingAverageTime } from './equations/category1/time-and-motion/work-sampling'; */
import { calculateWorkSamplingAverageTime } from './equations/category1/basic-time-study/time-sampling';

const categorySelect = document.getElementById('category-select');
const subCategorySelect = document.getElementById('sub-category');
const subCategorySection = document.getElementById('sub-category-select');
const equationList = document.querySelector('.equation-list');
const equationInputs = document.getElementById('equation-inputs');
const equationResult = document.getElementById('equation-result');

// Define sub-categories for each category
const subCategories = {
    'time-motion': ['Basic Time Study', 'Predetermined Motion Time Systems (PMTS)', 'Work Sampling', /* ... */],
    'production-efficiency': ['Overall Equipment Effectiveness (OEE)', 'Efficiency Calculation', /* ... */],
    // Add sub-categories for other categories
};

// Function to populate sub-category options
function populateSubCategories(category) {
    subCategorySelect.innerHTML = '';

    if (subCategories[category]) {
        subCategories[category].forEach(subCategory => {
            const option = document.createElement('option');
            option.value = subCategory;
            option.textContent = subCategory;
            subCategorySelect.appendChild(option);
        });
    }
}

categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;

    // Update sub-category options
    populateSubCategories(selectedCategory);

    // Show or hide sub-category section
    if (subCategories[selectedCategory]) {
        subCategorySection.classList.remove('hidden');
    } else {
        subCategorySection.classList.add('hidden');
    }
});

equationList.addEventListener('click', event => {
    if (event.target.classList.contains('equation-item')) {
        const selectedEquation = event.target.dataset.equation;
        updateEquationInterface(selectedEquation);
        
    }
});

function clearEquationInterface() {
    equationInputs.innerHTML = '';
    equationResult.innerHTML = '';
}

function showEquationInterface() {
    equationInputs.classList.remove('hidden');
    equationResult.classList.remove('hidden');
}


function updateEquationInterface(selectedEquation) {
    // Clear previous inputs and result
    clearEquationInterface();
    /* console.log(selectedEquation) */
    // Display input fields for the selected equation
    if (selectedEquation === 'basic-time-study-equation1') {
        // Display input fields for Equation 1
        equationInputs.innerHTML = `
            <label for="input-variable1">Variable 1:</label>
            <input type="number" id="input-variable1" required>
            <label for="input-variable2">Variable 2:</label>
            <input type="number" id="input-variable2" required>
            <button id="calculate-button">Calculate</button>
        `;
    
        const calculateButton = document.getElementById('calculate-button');
        calculateButton.addEventListener('click', handleEquationCalculation);
        
        // Show equation inputs
        showEquationInterface();

    }

    if (selectedEquation === 'work-sampling-equation') {
        const observationTaskX = parseFloat(document.getElementById('input-observation-task-x').value);
        const totalObservations = parseFloat(document.getElementById('input-total-observations').value);
        const totalTimePeriod = parseFloat(document.getElementById('input-total-time-period').value);

        const result = calculateWorkSamplingAverageTime(observationTaskX, totalObservations, totalTimePeriod);

        // Display the result
        displayEquationResult(`Average Time: ${result} units`);

        const equationInputsHTML = `
            <label for="input-observation-task-x">Observations of Task X:</label>
            <input type="number" id="input-observation-task-x" required>
            <label for="input-total-observations">Total Observations:</label>
            <input type="number" id="input-total-observations" required>
            <label for="input-total-time-period">Total Time Period:</label>
            <input type="number" id="input-total-time-period" required>
            <button id="calculate-button">Calculate</button>
        `;
        equationInputs.innerHTML = equationInputsHTML;

        const calculateButton = document.getElementById('calculate-button');
        calculateButton.addEventListener('click', handleEquationCalculation);

        // Show equation inputs
        showEquationInterface();
    }

    // Add similar sections for other equations as needed
}

// Handle equation calculation
const calculateButton = document.getElementById('calculate-button');
function handleEquationCalculation() {
    const variable1 = parseFloat(document.getElementById('input-variable1').value);
    const variable2 = parseFloat(document.getElementById('input-variable2').value);

    // Calculate result using equation function
    const result = calculateEquation1(variable1, variable2);

    // Display the result
    equationResult.textContent = `Result: ${result}`;
}


document.addEventListener('DOMContentLoaded', () => {
    // Your event listener setup code goes here
    calculateButton.addEventListener('click', handleEquationCalculation);
    categorySelect.addEventListener('change', handleCategorySelection);
    equationList.addEventListener('click', handleEquationSelection);
});


/* // Function to clear equation inputs and result
function clearEquationInterface() {
    equationInputs.innerHTML = '';
    equationResult.innerHTML = '';
}

// Function to display equation inputs
function displayEquationInputs(inputs) {
    equationInputs.innerHTML = inputs.map(input => `
        <label for="${input.id}">${input.label}</label>
        <input type="number" id="${input.id}" required>
    `).join('');
}

// Function to show equation inputs and result
function showEquationInterface() {
    equationInputs.classList.remove('hidden');
    equationResult.classList.remove('hidden');
}

// Handle category selection event
function handleCategorySelection() {
    const selectedCategory = categorySelect.value;

    // Update sub-category options
    populateSubCategories(selectedCategory);

    // Show or hide sub-category section
    subCategorySection.classList.toggle('hidden', !subCategories[selectedCategory]);
}

// Handle equation selection event
function handleEquationSelection(event) {
    if (event.target.classList.contains('equation-item')) {
        const selectedEquation = event.target.dataset.equation;
        updateEquationInterface(selectedEquation);
    }
}

// ... Other functions ...

// Event listener for category selection
categorySelect.addEventListener('change', handleCategorySelection);

// Event listener for equation selection
equationList.addEventListener('click', handleEquationSelection);
 */