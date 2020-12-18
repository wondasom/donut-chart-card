# 🍩 Donut Chart Card Challenge

This is a task to create a DonutChartCard component.

## ✅ General Specification

About the list,

- [x] There is a list of dounut chart card that shows data provided by a JSON dataset, using AJAX request.

About each widget(card),

- [x] Each card has a title.
- [x] Each card has a donut chart with a label of total number of the users in the middle.
- [x] Each card has a legend of the represented items.
- [x] Each card has a menu button on the top-right that contains an action item **Clone**.
  - [x] When the **Clone** button is clicked, the current card will be duplicated.
  - [x] When the duplication is finished, the **Clone** button of the _original card_ will disappear.

## 👩🏻‍💻 Requirements

- [x] Use React or Vue.
  - React
- [x] Use UI frameworks/libraries by choice.
  - Material-UI (for a menu button)
- [x] Use [Apexcharts](https://apexcharts.com/) to create the charts.
- [ ] _(optional)_ Provide unit test coverage.

## ✨ Further Tasks

- [x] Improve error component.
- [x] Improve loading component.
- [x] Do better prop handling. (by moving mapping to parents components)
- [x] Implement keys using UUID.
- [ ] Improve performance, minimizing unnecessary rendering.

## ⚙️ Set Up

Clone this repository to your local environment. You will need `node` and `npm`/`yarn` installed on your machine.

to install dependencies <br>
`npm install` or `yarn install`

to run the application <br>
`npm start` or `yarn start`

## 🎨 Design Decisions & Framework Choices

- The main goal in terms of design was to make it look identical as possible with the given example,
  - by making/using the same color palette(![#c4366f](https://via.placeholder.com/15/c4366f/000000?text=+) `#c4366f`, ![#85adff](https://via.placeholder.com/15/85adff/000000?text=+) `#85adff`, ![#502579](https://via.placeholder.com/15/502579/000000?text=+) `#502579`).
  - by using similar typography.
  - by implementing similar layout.

## 💯 Areas for Improvements & Questions

- Why did AJAX not work when the json file was in the `src` folder, but did work in the `public` folder?
- What would be the better way of writing `handleClone` funtion (in case you want to insert an element into specific index of an array)?
- What is the best way of making dashed line _without_ using background image?
- Time to learn **Jest**!
- How to update state on prop changes?
  - Why is `componentWillRecieveProps` UNSAFE?
