import {createElement, Component, render} from './toy-react'
class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render(){
        return <div>
            <div>my component</div>
            <button onclick={()=>{}>add</button>
            <span>{this.state.a.toString()}</span>    
        </div>
    }
}

render(
    <MyComponent id="a" class="c">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </MyComponent>
,document.body)