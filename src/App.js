import React, { Fragment } from 'react'

import ToDo from './containers/todo/todo'
import Title from './components/title/title'

export const App = () => (
    <Fragment>
        <Title title="ToDo App" />
        <ToDo />
    </Fragment>
);