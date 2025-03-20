// Max limits for each field
const maxValues = {
    sensor: 3,
    orangeBalls: 9,
    goal1Balls: Infinity,
    bonusGoal1: 3,
    goal2Balls: Infinity,
    bonusGoal2: 3,
    goal3Balls: Infinity,
    bonusGoal3: 3,
    switches: 5
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
  
    // Scoring logic
    let score = 0;
    score += sensorUses * 5; // Sensors
    score += orangeBalls * 1; // Orange Balls
  
    // Goals with bonuses
    score += goal1Balls * 10 * Math.pow(2, bonusGoal1);
    score += goal2Balls * 5 * Math.pow(2, bonusGoal2);
    score += goal3Balls * 2 * Math.pow(2, bonusGoal3);
  
    // Noise-Activated Switches
    score += switches * 4;
  
    // Update total score
    document.getElementById('total-score').textContent = score;
  }
  