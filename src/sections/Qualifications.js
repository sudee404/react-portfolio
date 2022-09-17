import React, { Component } from "react";
import { UncontrolledAccordion } from "reactstrap";
import AccordionItemCustom from "../ui/AccordionItemCustom";

export default class Qualifications extends Component {
    render() {
        const qualifications = [
            "Basic Programming",
            "Data Science",
            "Web Development",
        ];
        const [two, three] = this.props.colors;
        return (
            <div
                className="p-lg-5 p-2 mb-4 rounded-3"
                style={{ backgroundColor: two }}
            >
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        Qualifications and Skills
                    </h1>
                    <p className="col-md-8 fs-4">
                        I have obtained certification from various institutions
                        in the following fields.
                    </p>
                </div>
                <UncontrolledAccordion
                    open="0"
                    defaultOpen="0"
                    className="shadow-lg rounded"
                    style={{backgroundColor:three}}
                >
                    {qualifications.map((skill, id) => (
                        <AccordionItemCustom
                            
                            skill={skill}
                            id={id}
                            key={id}
                            colors={this.props.colors}
                        />
                    ))}
                </UncontrolledAccordion>
            </div>
        );
    }
}
