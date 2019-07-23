# Senior Checkpoint Study Guide

## What is the senior checkpoint?

A test-spec-based assessment (similar to previous checkpoints, e.g. pillars) covering: Express, Sequelize, React, Redux, and JS algorithms.

## What is it for?

Determining whether you are ready for what's coming in senior phase: whether you will be able to contribute meaningfully to group projects and whether you are in a place to benefit (instead of flounder) from the senior phase curriculum.

## Format

Test-spec based, like all of the previous checkpoints.

## Time frame

Unless otherwise agreed-upon, you will have three hours to complete the Senior Checkpoint.

## Miscellaneous study tips

- In the past, we've heard that (for many) the most difficult part of the checkpoint involved React and forms; we recommend brushing up on handling inputs in react
- Time yourself doing previous / practice checkpoints, diagnose what ends up consuming most of your time, and figure out a plan for mitigating it; *actually* timing yourself can ground you not only in whether you understand the material in general, but also whether you are ready for the pace of the senior checkpoint
- Use flash cards (and [here's a neat flash app](https://apps.ankiweb.net/)), for example for things like "how to write an express route"; effective visualization and recall of common code structure can help keep your momentum going during a checkpoint
- Identify topics you are struggling with and book office hours so we can help you get unstuck
- During the checkpoint, don't forget you can ask questions about the specs—the primary intention of the checkpoint is to determine your understanding of the material, not your ability to read test specs (that's a useful skill, not a *crucial* one at this juncture)

## Some resources

- (Coming soon: the Junior Phase Final Project, which is itself a good way to study for the Senior Checkpoint)
- All of the past and practice checkpoints: special shout-out to **Cody's Quiz** and **Cody's Cafe**; recommended for those who have gotten tripped up on the spec-based format, and want to continue preparing for that
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
  - Define error handling middleware

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

### JS...

- Do I know how to use strings and string methods?
- Do I know how to use arrays and array methods?
- Do I know how to interact with objects?
- Do I know how to use functions, including higher order functions?
- Do I know how to define and use loops, including nested loops?
