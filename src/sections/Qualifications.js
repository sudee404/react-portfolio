import React, { Component } from "react";
import { UncontrolledAccordion } from "reactstrap";
import AccordionItemCustom from "../ui/AccordionItemCustom";
import ButtonLink from "../ui/ButtonLink";

export default class Qualifications extends Component {
    render() {
        const qualifications = [
            "Basic Programming",
            "Data Science",
            "Web Development",
        ];
        const skills = [
            [
                { name: "Python", issuer: "Sololearn", level: 80 },
                { name: "Java", issuer: "Sololearn", level: 50 },
                { name: "Android with Kotlin", issuer: "--------", level: 60 },
            ],
            [
                { name: "Data Science", issuer: "Sololearn", level: 70 },
                { name: "Pandas", issuer: "Kaggle", level: 70 },
                { name: "Machine Learning", issuer: "Kaggle", level: 60 },
                { name: "Data Visualisation", issuer: "Kaggle", level: 80 },
            ],
            [
                { name: "HTML", issuer: "Sololearn", level: 90 },
                { name: "Bootstrap", issuer: "--------", level: 75 },
                { name: "JQuery", issuer: "Sololearn", level: 80 },
                { name: "CSS", issuer: "Sololearn", level: 80 },
                { name: "React and Redux", issuer: "Sololearn", level: 70 },
                {
                    name: "Django Web Technologies",
                    issuer: "Coursera",
                    level: 70,
                },
                { name: "AWS S3 Basics", issuer: "Coursera", level: 80 },
            ],
        ];
        return (
            <div
                className="p-lg-5 p-2 mb-4 rounded-3"
            >
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        Qualifications and Skills
                    </h1>
                    <p className="col-md-8 fs-4">
                        I have obtained certification from various institutions
                        in the following fields.
                    </p>
                    <ButtonLink
                        text="Certificates"
                        link="https://drive.google.com/drive/u/0/folders/1aPSWAmkkk3f7Z5fBXsi-mWPrY4_qAqUd"
                    />
                    <div className="py-3"></div>
                </div>
                <UncontrolledAccordion
                    open="0"
                    defaultOpen="0"
                    className="shadow-lg rounded"
                >
                    {qualifications.map((skill, id) => (
                        <AccordionItemCustom
                            skill={skill}
                            id={id}
                            key={id}
                            data={skills[id]}
                            colors={this.props.colors}
                        />
                    ))}
                </UncontrolledAccordion>
            </div>
        );
    }
}
