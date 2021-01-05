# 🍩 Donut Chart Card Challenge

This is a task to create a DonutChartCard component.

## ✅ General Specification

About the list,

- [x] There is a list of donut chart card that shows data provided by a JSON object, using AJAX request.
- [x] All of the cards look the same, but show different data.

About each widget(card),

- [x] Each card has a title.
- [x] Each card has a donut chart with a label of the total number of users in the middle.
- [x] Each card has a legend of the represented items.
- [x] Each card has a menu button on the top-right that contains an action item Clone.
  - [x] When the menu button is clicked, the current card will be duplicated.
  - [x] When the duplication is finished, the menu button of the _original card_ will disappear.

## 👩🏻‍💻 Requirements

- [x] Use React or Vue.
  - React
- [x] Use UI frameworks/libraries by choice.
  - [Material-UI Menu Component](https://material-ui.com/components/menus/) (for a menu button)
- [x] Use [Apexcharts](https://apexcharts.com/) to create the charts.
- [ ] _(optional)_ Provide unit test coverage.

## ✨ Further Tasks

- [x] Add CSS to an error component.
- [x] Add CSS to a loading component.
- [x] Do better prop handling.
- [x] Implement keys using Uuid.
- [x] Improve performance, minimizing unnecessary rendering.

## ⚙️ Set Up

Clone this repository to your local environment. You will need `node` and `npm`/`yarn` installed on your machine.

to install dependencies <br>
`npm install` or `yarn install`

to run the application <br>
`npm start` or `yarn start`

## 🎨 Design Decisions & Framework Choices

- The main goal in terms of design was to make it look identical as possible with the given example,
  - by making/using the same color palette( `#c4366f`, `#85adff`, `#502579`).
  - by using similar typography([Nunito](https://fonts.google.com/specimen/Nunito?preview.text=12187&preview.text_type=custom&selection.family=Noto+Sans:wght@700|Nunito:wght@300;400;600;700;800&sidebar.open=true&query=nunito), [Noto-Sans](https://fonts.google.com/specimen/Noto+Sans?preview.text=12187&preview.text_type=custom&selection.family=Noto+Sans:wght@700|Nunito:wght@300;400;600;700;800&sidebar.open=true)).
  - by implementing similar layout.
- I was tempted to work with Vue.js but with the time constraint, I chose React.js which I feel more comfortable to work with.
- I used Styled Components because I can still use plain CSS syntax without having to worry about your selector names existing in a global scope with cascading overrides, and add extra JavaScript code when dynamic styling is needed.    

## [💯 Areas for Improvements & Questions](https://wondasom93.medium.com/my-first-react-code-challenge-and-more-d59a9677f18a)

- Why did AJAX not work when the JSON file was in the `src` folder but did work in the `public` folder?
- What would be the better way of writing the `handleClone` function (in case you want to insert an element into a specific index of an array)?
- What are the valuable tips and guidelines for data visualization?
- What is the alternative of making/customizing dashed line _without_ using the `background-image` or `border` in CSS?
- How to update the state on prop changes?
  - Why is `componentWillRecieveProps` [UNSAFE to use](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)?
- Time to learn [Jest](https://jestjs.io/)!
  
