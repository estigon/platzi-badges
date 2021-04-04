import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetail from '../pages/BadgeDetail'
import NotFound from '../pages/NotFound'
import Layout from './Layout'
import Home from '../pages/Home'

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetail}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

/**
 * podemos crear un elemento y llamar al render del mismo solo con function nameComponent()
 * cuando no exista otro metodo declarado y no se este usando estado
 * 
 * function nameComponent() y render() devuelven un JSX.Element
 */

export default App
