import Accordion from "react-bootstrap/Accordion";
import faqAccData from "./faqAccData.json";
import FaqForm from "./FaqForm";
import { AccordionHeader, AccordionItem } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const Faq = () => {
  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Accordion defaultActiveKey="1" id="accordionFAQ" flush>
                {faqAccData && Array.isArray(faqAccData) && [...faqAccData].map((data, index) => {
                  return (
                    <AccordionItem eventKey={`${index}`} key={index}>
                      <AccordionHeader as="h2">
                        <span>{data.number}</span>
                        {data.question}
                      </AccordionHeader>
                      <AccordionBody>{data.answer}</AccordionBody>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            <div className="col-md-6 col-12">
              <FaqForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
