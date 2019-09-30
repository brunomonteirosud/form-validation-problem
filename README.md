# [Form validation problem](https://springload.github.io/form-validation-problem/) by Bruno Monteiro

## Original README:

### Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

### Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

Please write a little bit about the technology you chose and why, including any limitations or possibilities of this approach.

### The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

### Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.

---

## Additional information from Bruno Monteiro

### Form Validation approach

To start, I used the native HTML5 validation by using attributes like `type`, `required` and `minlenght`; which are supported by the majority of the browsers.

The second step was to use pure JavaScript to validate the fields. I decided to use the ES5 syntax, including things like `Array.from` instead of the `spread` operator, to have a greater browser compatibility. I also used JavaScript to re-check some of the HTML5 validation, as an extra validation layer.

The reason of not using any libraries like jQuery or React was to keep the project simple, portable and without dependencies. This means that this project is compatible with most browsers versions and has a light code base. The downside of it is that it makes the code a bit longer and it doesn't include features that would be easier to includ using a third-party helper.

That said, a React version was included in the repository. Refer to the `react-version` folder to see more.