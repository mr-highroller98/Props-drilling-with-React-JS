import Main from "./components/Main";
import { AppProvider } from "./context/index";

function App() {
    return (
        <AppProvider value = {{
                title:'Practice by Harish & Arun',
                name:'Chennai Art Exhibition',
                colors:['red', 'blue', 'green']
        }}> 
           <Main />
        </AppProvider>
    );
}

export default App;