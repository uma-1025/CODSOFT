import {Link} from 'react-router-dom'
function Home()
{
    return(
        <div className="home">
            <h1>About Me</h1>
            <h2>Name:Uma Maheshwari.S</h2>
            <h2>Education:</h2>
            <ul>
                <li>10th – Deccan English School</li>
                <li>PUC – Sheshadripuram Composite PU College</li>
                <li>B.Tech CSE – 3rd Year</li>
            </ul>
            <h2>Focus:</h2>
            <ul>
                <li>Data Structures & Algorithms (DSA)</li>
                <li>Frontend Development</li>
            </ul>
            <h2>Hobbies:</h2>
            <ul>
                <li>Listening to music</li>
                <li>Dancing</li>
            </ul>
            <h2>Personal Note:</h2>
            <ul>
                <li>Always eager to learn and create</li>
                <li>Enjoys turning ideas into projects and code</li>
            </ul>
        </div>
    )
}
export default Home