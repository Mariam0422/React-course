import Login from "./login"
function App () {
    return (
        <div> 
            2
            <Login 
                title="Login Form" 
                list={['free doamin']}
            /> 
            <hr/>
            <Login 
                title="Register Form"
                list={[
                    'free doamin',
                    'free hosting',
                    'SSL key',
                ]}
            /> 
        </div>
    )
}
export default App;