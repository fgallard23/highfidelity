import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/LandingPage";
import Contact from './components/Contact';

function App() {
    //header and footer selected
    const [selectedIndex, setSelectedIndex] = useState(0); //select option menu
    const [value, setValue] = useState(0); //index option menu

    return (
        <BrowserRouter>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}/>
            <Switch>
                <Route exact path="/"
                       render={(props) => <LandingPage {...props} setValue={setValue}
                                                       setSelectedIndex={setSelectedIndex}/>}/>
                <Route exact path="/services" component={() => <div>Services</div>}/>
                <Route exact path="/customsoftware" component={() => <div>Custom Software</div>}/>
                <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>}/>
                <Route exact path="/websites" component={() => <div>Websites</div>}/>
                <Route exact path="/revolution" component={() => <div>The Revolution</div>}/>
                <Route exact path="/about" component={() => <div>About Us</div>}/>
                <Route exact path="/contact" render={(props => (
                    <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>))}/>
                <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
            </Switch>
            <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        </BrowserRouter>
    );
}

export default App;

