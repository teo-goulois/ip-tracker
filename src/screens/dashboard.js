import React from 'react'

const Dashboard = props => {
    return(
        <div className="dashboard-container">

            <div>
                <h2>ip address</h2>
                <h1>{props.ip[0]}</h1>

            </div>
            
            <div>
                <h2>location</h2>
                <h1>{props.ip[1]}</h1>
            </div>

            <div>
                <h2>timezone</h2>
                <h1>{ props.ip[2]}</h1>
            </div>

            <div>
                <h2>isp</h2>
                <h1>{props.ip[3]}</h1>
            </div>
            
        </div>
    )

}

export default Dashboard;