# [Form validation problem](https://springload.github.io/form-validation-problem/) by Bruno Monteiro (React Version)

## Purpose

The idea of this project is to create a solution for the "Form validation problem" using React. This will show my React skills and allow me to develop features not possible in the "pure" JavaScript version of the project.

## Requirements and How to run

This project will require NPM and Node. After installing it, you can download this project and run `npm install` to install all the dependencies.

Other usefull scripts:

-   `npm run start` (Will create a local server and open the project in your browser)
-   `npm run build` (Will create a "dist" folder with a production version of the project)
-   `npm run test` (Will run the unit tests of the project)
-   `npm run test:coverage` (Will create a "test-coverage" folder with a HTML report)

## Personal Notes

### Validation Approach

Since React is a dynamic and responsive library, I decided to change the approach of the first project. Instead of validating the fields on the "submit" action, the validation happens in real time, as the user types and select options in the form.

To achieve that, I used React Hooks (`useState` and `useEffect`) to manage the state and trigger the `checkFormErrors()` function.

I also decided to keep the validation functions (with it's criteria) in a separate file, which is aligned with some clean code principles, like "Don't Repeat Yourself", "Separation of Concerns", etc.

### Quality Control

This project uses ESLint with some basic React and Typescript configuration. It also uses Prettier.

Before each commit, ESLint and Prettier are called by Husky, to make sure the code looks good to be submitted.

Some Unit Tests were also added to this project, using Jest and react-testing-library.

## Some of the tech included in this project

-   ReactJS
-   TypeScript
-   NPM
-   StyledComponents
-   Babel
-   Webpack
-   ESLint
-   Prettier
-   Husky
-   Jest
-   react-testing-library
