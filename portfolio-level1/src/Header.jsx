import {Link} from 'react-router-dom'
function Header()
{
    return(
        <div>
            <div className="header">
            <h1>Portfolio</h1>
            <Link to='/'><h2>About</h2></Link>
            <Link to='/Skills'><h2>Skills</h2></Link>
            <Link to='/Projects'><h2>Projects</h2></Link>
            <Link to='/Resume'><h2>Resume</h2></Link>
            <Link to='/Contact'><h2>Contact</h2></Link>
            </div>
        </div>
    )
}
export default Header