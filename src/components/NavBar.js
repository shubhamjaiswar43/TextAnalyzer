import './css/navBar.css';
import PropTypes from 'prop-types';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
function NavBar(props){ 
    const [bgColor,changeBgColor] = useState('#ffffff');
    const [textColor,changeTextColor] = useState('#000000');
    const [styleForAnchorTag,changeStyleForAnchorTag] = useState(null);
    const changeColorOfAnchorTag = (val)=>{
        changeStyleForAnchorTag({
            color:`${val}`
        })
    }
    const handleMode = ()=>{
        props.toggleMode();
        const d1 = 'navbar-dark';
        const d2 = 'bg-dark';
        const nav = document.getElementById('navB');
        const modeChangeBtn = document.getElementById('modeChangeBtn');
        const body = document.querySelector('body');
        const myBox = document.getElementById('myBox');
        const mySearch = document.getElementById('mySearch');
        
        if(props.mode){
            props.sendAlert("Dark Mode Is Disabled!!!","success");

            nav.classList.remove(d1);
            nav.style.backgroundColor = 'white';

            body.classList.remove(d2);
            body.style.color='black';
            body.style.backgroundColor = 'white';

            if(myBox!==null){
                myBox.classList.remove(d2);
                myBox.style.backgroundColor = 'white';
                myBox.style.border = '2px solid black';
                myBox.style.color = 'black';
            }

            mySearch.style.border = '2px solid black';

            modeChangeBtn.innerHTML = modeChangeBtn.innerHTML.replace('Disable','Enable');

            changeBgColor('#ffffff');
            changeTextColor('#000000');
            if(textColor!=='#000000'){
                changeColorOfAnchorTag('#000000');
            }
        }else{
            props.sendAlert("Dark Mode Is Enabled!!!","success");

            nav.classList.add(d1);
            nav.style.backgroundColor = 'black';

            body.classList.add(d2);
            body.style.color = 'white';

            if(myBox!==null){
                myBox.classList.add(d2);
                myBox.style.border = '2px solid white';
                myBox.style.color = 'white'; 
            }

            mySearch.style.border = '2px solid white';

            modeChangeBtn.innerHTML = modeChangeBtn.innerHTML.replace('Enable','Disable');
            
            changeBgColor('#000000');
            changeTextColor('#ffffff');
            if(textColor!=='#ffffff'){
                changeColorOfAnchorTag('#ffffff');
            }
        }
    }
    const changeTheme = (color)=>{
        const nav = document.getElementById('navB');
        const body = document.querySelector('body');
        const myBox = document.getElementById('myBox');
        if(body.classList.contains('bg-dark')){
            body.classList.remove('bg-dark');
            myBox.classList.remove('bg-dark');
        }
        nav.style.backgroundColor = color;
        body.style.backgroundColor = color;
        myBox.style.backgroundColor = color;
    }
    const changeTextTheme = (color) =>{
        const body = document.querySelector('body');
        const myBox = document.getElementById('myBox');
        body.style.color = color;
        changeColorOfAnchorTag(color);
        myBox.style.color = color;
    }
    const handleTextColor = (event)=>{
        changeTextTheme(event.target.value);
    }
    const handleColor = (event)=>{
        changeTheme(event.target.value);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg" id='navB'>
                <div className="container-fluid"> 
                    <Link className="navbar-brand" style={styleForAnchorTag} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" style={styleForAnchorTag} aria-current="page" to="/">{props.navHead[0]}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={styleForAnchorTag} to="/about">{props.navHead[1]}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style={styleForAnchorTag} to='/contact' aria-disabled="true">{props.navHead[2]}</Link>
                        </li>
                    </ul>
                    <p className='fs-5 my-1'>Text : </p>
                    <input type="color" className='mx-1' onChange={handleTextColor} value={textColor} />
                    <p className='fs-5 my-1'>Theme : </p>
                    <input type="color" className='mx-1' id="colorForTheme" onChange={handleColor} value={bgColor} />
                    <button className="btn btn-outline-primary mx-3" id="modeChangeBtn" onClick={handleMode}>Enable Dark Mode</button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" id="mySearch" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
NavBar.propTypes = {
    title:PropTypes.string,
    navHead:PropTypes.array
}
NavBar.defaultProps = {
    title:'My Title',
    navHead:['Nav1','Nav2','Nav3']
}
export default NavBar;