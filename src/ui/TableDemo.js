import React, { Component } from "react";
import { Progress, Table } from "reactstrap";

export default class TableDemo extends Component {
    render() {
        const getColor = (level) => {
            var color = "danger";
            if (level >= 80) {
                color = "success";
            } else if (level >= 60) {
                color = "info";
            } else if (level >= 50) {
                color = "primary";
            } else if (level >= 40) {
                color = "warning";
            }
            return color;
        };
        return (
            <Table borderless responsive className={this.props.colors[4]}>
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
                                <Progress
                                    animated
                                    color={getColor(skill.level)}
                                    value={skill.level}
                                >
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
