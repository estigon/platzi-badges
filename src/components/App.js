import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound'
import Layout from './Layout'

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
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
