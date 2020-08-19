import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/give-classes" component={TeacherForm} />
                <Route study="/study" component={TeacherList} />
            </Switch>            
        </BrowserRouter>
    );
}

export default Routes;