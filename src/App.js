import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import Me from './Me.js';
import Report from './Report.js';
import Report2 from './Report2.js';
import Form from "./Form.js";
import DatePicker from "./DatePicker.js"


=======
import ReactMarkdown from 'react-markdown';
import './App.css';


const readMe =
`
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### 'npm start'

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### 'npm test'


Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 'npm run build'

Builds the app for production to the 'build' folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 'npm run eject'

**Note: this is a one-way operation. Once you 'eject', you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can 'eject' at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
`



function Me() {
  return (
    <div>
    <h2>Me</h2>
    <p>
    Hej! Jag heter deel18 och studerar för tillfället webbprogrammering vid BTH. Jag är ganska ny när det kommer till programmering, däremot tycker jag att det är väldigt intressant och hoppas på att kunna lära mig många nya saker under min studietid och kunna använda det dagligen. Ser fram emot det!
    </p>


    </div>
)
}

function Report() {
  return (
      <div>
      <h2>Kmom01</h2>
      <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>

      <ReactMarkdown source={readMe} />


     </div>
  )

}

>>>>>>> 8dba3b94c0b3791047645d407c85da247954413b
function AppRouter() {
  return (
    <Router>
      <div class="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Me</Link>
            </li>
            <li>
              <Link to="/reports/week/1">Kmom01</Link>
            </li>
<<<<<<< HEAD
            <li>
              <Link to="/reports/week/2">Kmom02</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
=======
>>>>>>> 8dba3b94c0b3791047645d407c85da247954413b
          </ul>
        </nav>

        <Route path="/" exact component={Me} />
<<<<<<< HEAD
        <Route path="/reports/week/1" component={Report} />
        <Route path="/reports/week/2" component={Report2} />
        <Route path="/form" component={Form} />
=======
        <Route path="/reports/week/:week" component={Report} />
>>>>>>> 8dba3b94c0b3791047645d407c85da247954413b
      </div>
    </Router>
  );
}

export default AppRouter;
