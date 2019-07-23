## Rubric

| Score | Meaning
| ------------- |-------------|
| 0 | Criteria not met
| 1 | Criteria met inconsistently
| 2 | Criteria met consistently

### Backend (6/22)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Properly handles errors in routes (i.e. by passing them to `next`) | -/2 | |
| Properly manages control flow in routes (i.e. does not send more than one response for the same request) | -/2 | |
| Selects appropriate data types for database columns | -/2 | |

### Frontend (6/22)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Uses thunks to encapsulate AJAX requests | -/2 | |
| Avoids side effects/mutations in reducers and in renders | -/2 | |
| Takes advantage of components to enforce modularity/separation of concerns | -/2 | |

### Code Cleanliness/Maintainability (10/22)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Frequent Git commits with descriptive messages (at least once per tier) | -/2 | |
| Formatting (indentation, whitespace, etc) is consistent | -/2 | |
| No unused/unnecessary code | -/2 | |
| Uses meaningful/self-documenting variable/function names | -/2 | |
| Does not contain blocks of commented out code (except for documentation) | -/2 | |

### Deductions

Points may be deducted if you are unable to complete a requirement without full direction from an instructor or a fellow. Points may also be deducted for any "hacks" or solutions to problems that do not properly employ the tools at hand (ex. directly modifying the DOM instead of allowing React to modify it for you). Any deductions will be documented below:

______

## Comments

_Comments from your instructor or fellow will go here_

## Evaluation

- Requirements score (57 points total, weighted at 75% of total grade)
- Rubric score (22 points total, weighted at 25% of total grade)
- Extra credit (15 points total, for an additional 15% max)

- RAW REQUIREMENT SCORE: __
- RAW RUBRIC SCORE: __
- RAW EC SCORE: __
- DEDUCTIONS: __

- TOTAL: __

```javascript
const getTotal = (rawRequirementScore, rawRubricScore, rawExtraCredit, deductions) => {
  const totalRequirementScore = ((rawRequirementScore/57) * 100) * 0.75
  const totalRubricScore = ((rawRubricScore/22) * 100) * 0.25
  const totalExtraCredit = ((rawExtraCredit/16) * 100) * 0.15

  const total = totalRequirementScore + totalRubricScore + totalExtraCredit - deductions
  return total
}
```
