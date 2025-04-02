// Max limits for each field
const maxValues = {
    sensor_red: 3,
    sensor_blue: 3,

    orangeBalls: 7,

    bonusballs: 5,

    goal1Balls_red: 7,
    bonusGoal1_red: 1,
    goal2Balls_red: 7,
    bonusGoal2_red: 1,
    goal3Balls_red: 7,
    bonusGoal3_red: 1,

    goal1Balls_blue: 7,
    bonusGoal1_blue: 1,
    goal2Balls_blue: 7,
    bonusGoal2_blue: 1,
    goal3Balls_blue: 7,
    bonusGoal3_blue: 1,

    switches_red: 3,
    switches_blue: 3

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
    const sensorUses = (parseInt(document.getElementById('sensor_red').textContent) || 0) + (parseInt(document.getElementById('sensor_blue').textContent) || 0);
    const orangeBalls = parseInt(document.getElementById('orangeBalls').textContent) || 0;

    const goal1Balls = parseInt(document.getElementById('goal1Balls_red').textContent) || 0;
    const bonusGoal1 = parseInt(document.getElementById('bonusGoal1_red').textContent) || 0;
    const goal2Balls = parseInt(document.getElementById('goal2Balls_red').textContent) || 0;
    const bonusGoal2 = parseInt(document.getElementById('bonusGoal2_red').textContent) || 0;
    const goal3Balls = parseInt(document.getElementById('goal3Balls_red').textContent) || 0;
    const bonusGoal3 = parseInt(document.getElementById('bonusGoal3_red').textContent) || 0;

    const goal1Balls_blue = parseInt(document.getElementById('goal1Balls_blue').textContent) || 0;
    const bonusGoal1_blue = parseInt(document.getElementById('bonusGoal1_blue').textContent) || 0;
    const goal2Balls_blue = parseInt(document.getElementById('goal2Balls_blue').textContent) || 0;
    const bonusGoal2_blue = parseInt(document.getElementById('bonusGoal2_blue').textContent) || 0;
    const goal3Balls_blue = parseInt(document.getElementById('goal3Balls_blue').textContent) || 0;
    const bonusGoal3_blue = parseInt(document.getElementById('bonusGoal3_blue').textContent) || 0;

    const switches = (parseInt(document.getElementById('switches_red').textContent) || 0) + (parseInt(document.getElementById('switches_blue').textContent) || 0);

    const bonusballs = parseInt(document.getElementById('bonusballs').textContent) || 0;
  
    // Scoring logic
    let score = 0;
    score += sensorUses * 10;
    score += orangeBalls * 1;
  
    // Goals with bonuses
    score += (goal1Balls + bonusGoal1) * 10 * Math.pow(2, bonusGoal1);
    score += (goal2Balls + bonusGoal2) * 5 * Math.pow(2, bonusGoal2);
    score += (goal3Balls + bonusGoal3) * 2 * Math.pow(2, bonusGoal3);
    score += (goal1Balls_blue + bonusGoal1_blue) * 10 * Math.pow(2, bonusGoal1_blue);
    score += (goal2Balls_blue + bonusGoal2_blue) * 5 * Math.pow(2, bonusGoal2_blue);
    score += (goal3Balls_blue + bonusGoal3_blue) * 2 * Math.pow(2, bonusGoal3_blue);

  
    // Noise-Activated Switches
    score += switches * 10;
    score += bonusballs * 10;
    if (document.getElementById('dronefreed_red').checked) {
        score += 20
    }

    switch (document.getElementById('droneland_red').value) {
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

    if (document.getElementById('dronefreed_blue').checked) {
        score += 20
    }
    
    switch (document.getElementById('droneland_blue').value) {
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


    // Update total score
    document.getElementById('total-score').textContent = score;
}
  
document.getElementById('droneland_red').addEventListener('input', function() {
    calculateScore()
})
document.getElementById('droneland_blue').addEventListener('input', function() {
    calculateScore()
})


document.getElementById('dronefreed_red').addEventListener('input', function() {
    calculateScore()
})
document.getElementById('dronefreed_blue').addEventListener('input', function() {

    calculateScore()
})
