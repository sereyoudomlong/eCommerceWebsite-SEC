import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {userContext} from "./lib/contextLib";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'))