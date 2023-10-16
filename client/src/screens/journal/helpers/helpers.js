import { SAVE_ICON_COLORS } from "../constants/constants";

export const renderFeedback = (goalData) => {
  if (goalData[0].goalType === "screentime") {
    if (
      goalData[0].behaviorValue <= goalData[0].goalValue / 2 &&
      goalData[0].behaviorValue <= goalData[0].recommendedValue / 2
    )
      return "Bravo! I EXCEEDED my goal AND the recommended level of behavior! I am doing great!";
    else if (
      goalData[0].behaviorValue <= goalData[0].goalValue &&
      goalData[0].behaviorValue <= goalData[0].recommendedValue
    )
      return "Hooray! I reached my goal AND the recommended level of behavior! Keep it up!";
    else if (
      goalData[0].behaviorValue <= goalData[0].goalValue &&
      goalData[0].behaviorValue > goalData[0].recommendedValue
    )
      return "Great, I reached my goal! Next I will need to work harder to reach the recommended level of behavior!";
    else if (
      goalData[0].behaviorValue > goalData[0].goalValue &&
      goalData[0].behaviorValue <= goalData[0].recommendedValue
    )
      return "Great, I reached the recommended behavior level! Next I will need to work harder to reach my own goal!";
    else if (
      goalData[0].behaviorValue > goalData[0].goalValue * 2 &&
      goalData[0].behaviorValue > goalData[0].recommendedValue * 2
    )
      return "I need to work harder to reach my goal! I can do it!";
    else if (
      goalData[0].behaviorValue > goalData[0].goalValue &&
      goalData[0].behaviorValue > goalData[0].recommendedValue
    )
      return "I'm not too far away from my goal AND the recommended level of behavior! Come on! My goal is within reach!";
    else return "...";
  } else {
    if (
      goalData[0].behaviorValue >= goalData[0].goalValue * 2 &&
      goalData[0].behaviorValue >= goalData[0].recommendedValue * 2
    )
      return "Bravo! I EXCEEDED my goal AND the recommended level of behavior! I am doing great!";
    else if (
      goalData[0].behaviorValue >= goalData[0].goalValue &&
      goalData[0].behaviorValue >= goalData[0].recommendedValue
    )
      return "Hooray! I reached my goal AND the recommended level of behavior! Keep it up!";
    else if (
      goalData[0].behaviorValue >= goalData[0].goalValue &&
      goalData[0].behaviorValue < goalData[0].recommendedValue
    )
      return "Great, I reached my goal! Next I will need to work harder to reach the recommended level of behavior!";
    else if (
      goalData[0].behaviorValue < goalData[0].goalValue &&
      goalData[0].behaviorValue >= goalData[0].recommendedValue
    )
      return "Great, I reached the recommended behavior level! Next I will need to work harder to reach my own goal!";
    else if (
      goalData[0].behaviorValue < goalData[0].goalValue / 2 &&
      goalData[0].behaviorValue < goalData[0].recommendedValue / 2
    )
      return "I need to work harder to reach my goal! I can do it!";
    else if (
      goalData[0].behaviorValue < goalData[0].goalValue &&
      goalData[0].behaviorValue < goalData[0].recommendedValue
    )
      return "I'm not too far away from my goal AND the recommended level of behavior! Come on! My goal is within reach!";
    else return "...";
  }
};

export const getSaveButtonColor = (loggedGoalToday, goalData, goal) => {
  if (
    loggedGoalToday &&
    goalData.length &&
    (goalData[0].goalValue - goal[0].goalValue !== 0 ||
      goalData[0].behaviorValue - goal[0].behaviorValue !== 0 ||
      goalData[0].reflection !== goal[0].reflection)
  ) {
    return SAVE_ICON_COLORS.YELLOW;
  } else if (!goalData.length || !loggedGoalToday) {
    return SAVE_ICON_COLORS.RED;
  } else if (
    goalData[0].goalValue - goal[0].goalValue === 0 &&
    goalData[0].behaviorValue - goal[0].behaviorValue === 0 &&
    goalData[0].reflection === goal[0].reflection
  ) {
    return SAVE_ICON_COLORS.GREEN;
  } else {
    return "auto";
  }
};