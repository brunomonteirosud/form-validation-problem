# [Form validation problem](https://springload.github.io/form-validation-problem/) by Bruno Monteiro (React Version)

## Purpose

The idea of this project is to create a solution for the "Form validation problem" using React. This will show my React skills and allow me to develop features not possible in the "pure" JavaScript version of the project.

## Validation Approach

Since React is a dynamic and responsive library, I decided to change the approach of the first project. Instead of validating the fields on the "submit" action, the validation happens in real time, as the user types and select options in the form.

To achieve that, I used React Hooks (`useState` and `useEffect`) to manage the state and trigger the `checkFormErrors()` function.

I also decided to keep the validation functions (with it's criteria) in a separate file, which is aligned with some clean code principles, like "Don't Repeat Yourself", "Separation of Concerns", etc.

## Some of the tech included in this project
- ReactJS
- TypeScript
- NPM
- StyledComponents
- Babel
- Webpack