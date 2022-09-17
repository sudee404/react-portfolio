import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
/**
 *
 */
class AccordionItemCustom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const [one,two, three, four] = this.props.colors;
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
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
                </AccordionBody>
            </AccordionItem>
        );
    }
}


export default AccordionItemCustom;
