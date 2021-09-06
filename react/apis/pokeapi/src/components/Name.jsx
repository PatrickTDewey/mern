
const Name = ({mons}) => {
    return (
        mons.map((mon, idx) => <li key={idx}>{mon.name}</li>)
    )
}

export default Name
