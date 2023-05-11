import Sidebar from './Sidebar';

function Main(props) {
    console.log(props, 'main');
    return (
        <>
            <h2>Main component</h2>
            <Sidebar {...props} />
        </>
    )
}

export default Main;