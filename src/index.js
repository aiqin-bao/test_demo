import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import './index.scss'

class Index extends PureComponent {
	render() {

		var a = '234567'
		return <div>

			
			<div></div>
			
			<span className="tips">  哈哈哈哈 {a}	</span>
           </div>
	}
}

ReactDOM.render(<Index />, document.querySelector('#container'))