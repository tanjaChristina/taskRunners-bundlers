function component(){
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console';
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import( /* webpackChunkName: "alert" */'./alert').then(module=>{
        var alert = module.default;
        alert("Hello participant!");
    });
    return element;
}

document.body.appendChild(component());