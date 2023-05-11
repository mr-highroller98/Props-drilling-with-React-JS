import List from './List';

function Sidebar(props) {
    console.log(props, 'sidebar');
    return (
        <>
            <h2>Sidebar component</h2>
            <List {...props} />
        </>
    )
}

export default Sidebar;