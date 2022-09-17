import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem} from "reactstrap";
import TableDemo from "./TableDemo";

class AccordionItemCustom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const [two] = this.props.colors;
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
                    <strong>
                        This basically entails all programming languages I am
                        farmiliar with. Some were taken as Units for my course,
                        while others I picked up along the way.
                    </strong>
                    
                    <TableDemo data={ this.props.data} />
                </AccordionBody>
            </AccordionItem>
        );
    }
}

export default AccordionItemCustom;
