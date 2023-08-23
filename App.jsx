import React from 'react';
import {Navigation} from "./components/Navigation";
import './assets/styles/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


export default function App() {
    return (
        <Navigation/>
    );
}