import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Switch, Link, Redirect} from "react-router-dom"
import Landing from '../components/landing/Landing'
import Personal  from "../components/personal-info/Personal"
import Technical from "../components/technical/Technical"
import Covid from "../components/covid/Covid"
import Insight from "../components/redberyinsightn/Insight"
import Submit from "../components/submit/Submit"
import Thanks from "../components/thanks/Thanks"
import Submited from '../components/submited/Submited'
function Routers() {

  return (
    <Router>
     <Switch>
       <Route path='/' exact component={Landing}/>
       <Route path={`/1`} component={Personal}/>
       <Route path={`/2`} component={Technical}/>
       <Route path={`/3`} component={Covid}/>
       <Route path={`/4`} component={Insight}/>
       <Route path={`/submit`} component={Submit}/>
       <Route path={`/submited`} component={Submited}/>
       <Redirect exact to='/'/>
     </Switch>
    </Router>
  )
}

export default Routers