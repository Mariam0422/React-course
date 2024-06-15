const jsContainer = document.getElementById('js');

const reactContainer = document.getElementById('react');

const root = ReactDOM.createRoot(reactContainer);

const render = () => {
   
    jsContainer.innerHTML = `
        <div class="demo">
            <h2>Hello JS</h2>
            <p>${new Date()}</p>
        </div>
    `
    root.render(  
        React.createElement(
            'div',
            null,
            React.createElement('h2', null, 'Hello React'),
            React.createElement(
                'p',
                null,
                new Date().toString()
            )
        )
    )    
}

setInterval(render, 1000);