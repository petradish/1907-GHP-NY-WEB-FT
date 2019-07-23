# Junior Phase Final Project Study Guide

## What is the Junior Phase Final Project?

A reasonably large solo project you will work on during week 5 of junior phase.

## What is it for?

Determining whether you are ready for what's coming in senior phase: whether you will be able to contribute meaningfully to group projects and whether you are in a place to benefit (instead of flounder) from the senior phase curriculum.

## Format

No test specs, only descriptions of what you are supposed to build, including wireframes. All necessary details will be shared with you when you start it.

## Time frame

Roughly three days, see your calendar for exact details.

## Miscellaneous study tips

- Redux (especially `react-redux` and more generally integrating Redux into the frontend of an application) has historically been challenging for people during the project, so we recommend spending some quality study time on that — if you feel you are not finding good study resources, please reach out so that we can help
- Study Saturdays are a particularly good way to prepare for the JPFP because the format is quite similar
- We recommend you plan to work on the project out of class, or at least leave that option open; talk to family members / roommates / whomever else about this ahead of time
- Sleep is still super important! Same with taking breaks. We encourage you to give it your all, but that means working smarter, not just harder

## Some resources

- Study Saturdays: a project-based exercise for practicing our stack with English-instructions, not just specs
- Weekly Summaries: notes about the major takeaways from all the topics we have covered so far; recommended for those looking to study and solidify by reading

## Questions to ask yourself

If there is a question below you cannot answer, you should look back to that part of the curriculum and / or reach out to your fellow or instructor with questions.

### Express...

- Do I know how to write CRUD routes?
  - Create / POST with `router.post`
  - Read / GET with `router.get`
  - Update / PUT with `router.put`
  - Delete / DELETE with `router.delete`
- Also, do I know how to deal with errors in routes?
  - Detect an error
  - Forward to error handling middleware
  - Define error handlin middleware

### Sequelize...

- Do I know how to do CRUD with Sequelize?
  - `Model.create()`
  - `Model.findAll()`
  - `Model.update()`
  - `Model.destroy()`
- Do I know how to define a model with `db.define`?
  - Columns
  - Class methods
  - Instance methods
  - Hooks
- Do I know how to use associations?
  - What are associations?
  - How does it affect the database and / or my code when I use an association?
  - What is the syntax for defining an association?
  - How can I query with an association (namely, eager loading with `include`)?

### React...

- Can I define a class component?
- Can I define functional component?
- Can I render a component in JSX and pass it props?
- Can I receive props and render them in my component?
- Can I set up my state properly?
- Can I wire up state changes for user events?
- Can I set up the root of my React view with `ReactDOM.render()`?
- Can I work with forms and user inputs?

### Redux...

- Do I know how to define an action / action creator?
- Do I know how to define a reducer?
  - Can I wire up logic for handling different action types?
  - Can I update a state without mutating it? Even "nested" state?
- Do I know how to define a thunk?
- Do I understand how actions, thunks, and reducers work to update the state?

### React Router...

- Do I know how to define a frontend route?
  - How to associate a component with a particular route path?
  - What props will that component will receive from react router?
  - How to pass in custom props to that component?
- Do I know how to define a link?
- Do I know how to use react router's `history` object to change the current URL?

### React-Redux...

- Do I understand `connect`?
  - What it does?
  - How to use it?
  - Where in my code to use it?
- Do I understand `mapStateToProps` and `mapDispatchToProps`?
  - What they do?
  - How to write them?
  - Where in the code to write them?
