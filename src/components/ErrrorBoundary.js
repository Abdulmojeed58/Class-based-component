import React, { Component} from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        console.log(error)
        this.setState({hasError: true})
    }

    render() {
        if(this.setState.hasError) {
            <p>Something happened</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary