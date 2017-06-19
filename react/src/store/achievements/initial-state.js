export default [
    buildAchievement("Habitual", "Awarded as you successfully perform your habit quests."),
    buildAchievement("Life Goals", "Awarded as you successfully perform your major quests."),
    buildAchievement("Farming", "Awarded as you level up through gaining EXP.")
]

function buildAchievement(name, desc, level = 0) {
    return {
        name,
        desc,
        level
    }
}