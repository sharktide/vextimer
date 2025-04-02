// Max limits for each field
const maxValues = {
    sensor: 3,
    orangeBalls: 7,
    goal1Balls: 7,
    bonusGoal1: 1,
    goal2Balls: 7,
    bonusGoal2: 1,
    goal3Balls: 7,
    bonusGoal3: 1,
    switches: 3,
    bonusballs: 3
};
  
// Adjust values with + and - buttons
function adjustValue(field, delta) {
    const valueElement = document.getElementById(field);
    let currentValue = parseInt(valueElement.textContent) || 0;
    currentValue += delta;
  
    // Ensure the value is within limits
    if (currentValue < 0) currentValue = 0;
    if (currentValue > maxValues[field]) currentValue = maxValues[field];
  
    valueElement.textContent = currentValue;
    calculateScore();

}
  
function calculateScore() {
    // Get all current values
    const sensorUses = parseInt(document.getElementById('sensor').textContent) || 0;
    const orangeBalls = parseInt(document.getElementById('orangeBalls').textContent) || 0;
    const goal1Balls = parseInt(document.getElementById('goal1Balls').textContent) || 0;
    const bonusGoal1 = parseInt(document.getElementById('bonusGoal1').textContent) || 0;
    const goal2Balls = parseInt(document.getElementById('goal2Balls').textContent) || 0;
    const bonusGoal2 = parseInt(document.getElementById('bonusGoal2').textContent) || 0;
    const goal3Balls = parseInt(document.getElementById('goal3Balls').textContent) || 0;
    const bonusGoal3 = parseInt(document.getElementById('bonusGoal3').textContent) || 0;
    const switches = parseInt(document.getElementById('switches').textContent) || 0;
    const bonusballs = parseInt(document.getElementById('bonusballs').textContent) || 0;
  
    // Scoring logic
    let score = 0;
    score += sensorUses * 10; // Sensors
    score += orangeBalls * 1; // Orange Balls
  
    // Goals with bonuses
    score += (goal1Balls + bonusGoal1) * 10 * Math.pow(2, bonusGoal1); // Goal 1
    score += (goal2Balls + bonusGoal2) * 5 * Math.pow(2, bonusGoal2);  // Goal 2
    score += (goal3Balls + bonusGoal3) * 2 * Math.pow(2, bonusGoal3);  // Goal 3

  
    // Noise-Activated Switches
    score += switches * 10;
    score += bonusballs * 10;
    if (document.getElementById('dronefreed').checked) {
        score += 20
        switch (document.getElementById('droneland').value) {
            case 'No Landing (0)':
                break
            case 'Landing (5)':
                score += 5;
                break
            case 'Partial Spot Landing (10)':
                score += 10;
                break
            case 'Full Spot Landing (20)':
                score += 20;
                break
    
        }
    }

    // Update total score
    document.getElementById('total-score').textContent = score;
}
  
document.getElementById('droneland').addEventListener('input', function() {
    calculateScore()
})

document.getElementById('dronefreed').addEventListener('input', function() {
    calculateScore()
})
