import React, { useState } from 'react'
import Tab from './Tab'
const Tabs = (props) => {
    const initialState = [{
        info: {
            label: 'Tab 1',
            desc: 'Description for tab 1.'
        },
        isActive: false
    },
    {
        info: {
            label: 'Tab 2',
            desc: 'Description for tab 2.'
        },
        isActive: false
    },
    {
        info: {
            label: 'Tab 3',
            desc: 'Description for tab 3.'
        },
        isActive: false
    }]
    const [tabsState, setTabsState] = useState(initialState)
    const clickHandler = (e, value) => {
        console.log(e, value);
        const tabs = [...tabsState]
        tabs.map((item) => item.isActive = false)
        tabs[value].isActive = true
        setTabsState(tabs)
    }
    return (
        <div className="container">
            <Tab onClick={clickHandler} items={tabsState} />
        </div>
    )
}

export default Tabs
