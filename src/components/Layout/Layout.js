import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.module.css'

import BurgerIngredient from './../Burger/BurgerIngredient/BurgerIngredient.js'
const layout = (props) => (
    <Auxiliary>
        <div className={classes.Navigation}>
            toolbar, sidebar, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}

            <BurgerIngredient />
        </main>
    </Auxiliary>
);

export default layout;
