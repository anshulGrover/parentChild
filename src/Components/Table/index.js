import React, { Component } from 'react'
import { Card, Row, Col, Table } from 'antd'
import Form from '../Form'
class TableData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.formRef = React.createRef()
    }

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (data) => {
                return <span>{`${data}`}</span>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (data) => {
                return <span>{`${data}`}</span>
            }
        }]
    getData = () => {
        this.formRef.current.onSubmit();
    }
    fetchData = (name, age) => {
        let obj = {
            name, age
        }
        let newData = [...this.state.data, obj]
        this.setState({ data: newData })
    }
    render() {

        return (
            <React.Fragment>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Table
                                bordered
                                dataSource={this.state.data}
                                columns={this.columns} />
                            <button onClick={this.getData}>Get Data</button>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card>
                            <Form ref={this.formRef} fetchData={this.fetchData} />
                        </Card>

                    </Col>
                </Row>
            </React.Fragment>)
    }
}
export default TableData