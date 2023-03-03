import { useLoaderData, Link } from "react-router-dom"
import "../styles/Home.css"

export default function Home (props) {
const goals = useLoaderData()

    return (
        <section className="homePage">
            <section class="homeBody">
                <section className="homeText">
                    <h2>A Place For All Your <br/>Job goals</h2>
                  </section>
                <section className="homeGraphic">
                    <img src="https://i.imgur.com/SQkvSRO.png" alt="something" />
                </section>
            </section>
            <section className="additionsSect">
                <h3>Recent Additions</h3>
                <section className="jobCards">
                    {goals.slice(-2).map((goal) => (
                         <Link to={`/goals/${goal._id}`}>
                         <div className="jobCard">
                        <h4>{goal.text}</h4>
                        
                    </div>
                    </Link>
                    ))}
                   
                </section>
            </section>
        </section>
    )
}