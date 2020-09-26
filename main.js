import {createElement, Component, render} from './toy-react'
class MyComponent extends Component{
    render(){
        return <div>
            <div>my component</div>
            {this.children}
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