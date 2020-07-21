import React, { Component } from 'react';
import Aux from '../ReactAux';
import classes from './Layout.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

class Layout extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <Navbar/>
                    <main className={classes.Main}>
                        {this.props.children}
                    </main>
                </div>
                <Footer/>
            </Aux>
        );
    }
}


export default Layout;