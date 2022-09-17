import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import TableDemo from "./TableDemo";

class AccordionItemCustom extends React.Component {
    render() {
        const two = this.props.colors[0];
        const skill = this.props.skill;
        const id = this.props.id.toString();
        return (
            <AccordionItem
                style={{ backgroundColor: two }}
                className="border-0"
            >
                <AccordionHeader targetId={id}>
                    <div className="fw-bolder">{skill}</div>
                </AccordionHeader>
                <AccordionBody accordionId={id}>
                    <TableDemo data={this.props.data} colors={ this.props.colors} />
                </AccordionBody>
            </AccordionItem>
        );
    }
}

export default AccordionItemCustom;
