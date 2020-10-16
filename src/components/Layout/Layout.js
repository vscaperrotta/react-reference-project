import React from 'react';
import Auxiliary from './../../hoc/Auxiliary '
import classes from './Layout.module.css'

const layout = (props) => (
    <Auxiliary>
        <div className={classes.Navigation}>
            toolbar, sidebar, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;
