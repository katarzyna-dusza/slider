# <img src="https://github.com/katarzyna-dusza/slider/blob/master/repo-images/favicon.ico"> Slider

A small library for implementing simple presentations. It's very elastic (you can add your styles) and easy to use.

This is a draft. The idea came out, when I was implementing my [CV](https://katarzyna-dusza.github.io/) and I couldn't find any library, which met my needs.

<img src="https://github.com/katarzyna-dusza/slider/blob/master/repo-images/recording.gif">

## Technologies
- **ES6**
- **jQuery**
- **Webpack**

## Sections (slides)
1. **Default** vertical section (with bottom -> top animation)
```html
<section class='one'>
    <div class='content'>
      <div class='text'>
        Text (from bottom to top)
      </div>
    </div>
</section>
```

1. **Horizontal** section (with left -> right animation)
```html
<section class='two' left>
    <div class='content'>
      <div class='text'>
        Text (from left to right)
      </div>
    </div>
</section>
```

## Example

Run the example app under _examples/mix_ directory or create your own:

#### Run example app
1. Install all dependencies
    ```shell
    yarn install
    ```

2. Run
    ```shell
    npm start
    ```
The example application should appear under http://localhost:8080/examples/mix.

#### Make your own app
1. Create `index.html`.
2. Add some sections.
3. Put at the end of the _body_ the **slider** scripts from the _/dist_ directory.

An exemplary HTML file can look like this:
```html
<!DOCTYPE html>
<head>
  ...
    <!-- your styles -->
    <link href='./my-styles.css' rel='stylesheet'>
<body>
    <div class='scrollable-sections'>
      <section class='one'>
          <div class='text'>
              Text 1 (fixed)
          </div>
      </section>
      <section class='two'>
          <div class='content'>
              <div class='text'>
                  Text 2 (from bottom to top)
              </div>
          </div>
      </section>
      <section class='three' left>
          <div class='content'>
              <div class='text'>
                Text 3 (from left to right)
              </div>
          </div>
      </section>
      <section class='four'>
          <div class='content'>
              <div class='text'>
                  Text 6 (from bottom to top)
              </div>
          </div>
      </section>
    </div>

    <script src='./js.js'></script>
    <script src='./css.js'></script>
</body>
</html>
```

> The above steps will change after publishing an npm package.

## Roadmap
- [ ] provide scrolling from different sides (top -> bottom and left -> right)
- [ ] provide possibility to select more animations like zooming or opacity
- [ ] rework _slider.js_
- [ ] combine _slider-mobile.js_ with _slider.js_
- [ ] publish as a npm package
