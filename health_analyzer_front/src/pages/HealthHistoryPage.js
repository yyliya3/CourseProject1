import '../App.css'
import React from 'react'
import LineChartComponent from '../components/LineChartComponent'
import HomeIcon from '@mui/icons-material/Home'
import IconButton from '@mui/material/IconButton'

export default function HealthHistoryPage(props) {
    const [history, setHistory] = React.useState(props.history)
    const [firstLoad, setFirstLoad] = React.useState(true)

    if (firstLoad) {
        setFirstLoad(false)
        Update()
        setInterval(() => {Update()}, 5000);
    }

    async function Update() {
        let body = {name: props.pageParams.name}
        let response = await fetch('http://localhost:8080/health/get_history', {method: 'POST', body:  JSON.stringify(body)})
        let responseJson = await response.json()
        setHistory(responseJson)
    }

    function OnHomeButtonClick() {
        window.history.pushState({}, undefined, '/')
        window.location.reload()
    }

    return (
        <div className='App'>
            <div className='HealthHistoryPage'>
                <div className='home-button'>
                    <IconButton onClick={() => {OnHomeButtonClick()}} color='primary' fontSize='large'>
                        <HomeIcon />
                    </IconButton>
                </div>
                <div className='page-title'>{props.pageParams.name}</div>
                <LineChartComponent data={history} />
            </div>
        </div>
    )
}
