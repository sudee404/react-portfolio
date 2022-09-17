import React, { Component } from "react";
import { Progress, Table } from "reactstrap";

export default class TableDemo extends Component {
    
    render() {
        return (
            <Table borderless responsive striped >
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Issued By</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((skill, id) => (
                        <tr key={id}>
                            <th scope="row">{skill.name}</th>
                            <td>{skill.issuer}</td>
                            <td>
                                <Progress animated color="warning" value={skill.level}>
                                    {skill.level}%
                                </Progress>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
