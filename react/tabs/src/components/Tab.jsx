import React from 'react'

const Tab = (props) => {
    const { onClick, items } = props
    let active = items.filter((item) => item.isActive === true).map((item) => item.info.desc)
    console.log(active.length);
    return (
        <div className='tab'>
            <div className="button-group">
                {
                    items.map((value, idx) => <button key={idx} className={value.isActive + ' btn'} onClick={(e) => onClick(e, idx)}>{value.info.label}</button>)
                }
            </div>
            { active.length === 1 ? <p className="p">{active}</p> : null}
        </div>
    )
}

export default Tab
