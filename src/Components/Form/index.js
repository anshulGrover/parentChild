import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
class FormData extends Component {
    state = {
        name: "",
        age: ""
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = () => {
        if (this.state.name === "" || this.state.age === "") {
            alert("Please fill both credentials")
            return;
        }
        this.props.fetchData(this.state.name, this.state.age)
        this.setState({ name: "", age: "" })
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <input value={this.state.name} placeholder="Name" type="text" name="name" onChange={this.onChange} required />
                    </Col>
                    <Col>
                        <input value={this.state.age} placeholder="Age" name="age" onChange={this.onChange} type="number" required />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
export default FormData