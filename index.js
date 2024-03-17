/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Store} from './App/Context';

const AppWithStore = () => {
    return (
        <Store>
            <App />
        </Store>
    )
}

AppRegistry.registerComponent(appName, () => AppWithStore);