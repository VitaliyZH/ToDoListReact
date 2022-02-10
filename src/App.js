import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        a > ToDo List < /a> <
        TaskWrapper / >
        <
        /header> <
        /div>
    );
}

function TaskWrapper() {
    return ( <
        div className = "App" >
        <
        h1 > Wrapper < /h1> <
        /div>
    );
}


export default App;
export { TaskWrapper };