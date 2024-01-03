import Image from "next/image";

const FaqForm = () => {
  return (
    <>
      <div className="faq-form">
        <Image
          quality={100}
          width={648}
          height={249}
          className="img-fluid"
          src="/image/faq-page/faq-form-image.png"
          alt="FAQ Image"
        />
        <div className="faq-form-title">
          <h2>Ask any Question</h2>
          <p>
            Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing as
            dignissim eu a ad venenatis.
          </p>
        </div>
        <form action="#">
          <div className="faq-form-top">
            <input
              type="text"
              name="faq-form"
              id="faq-name"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="faq-form"
              id="faq-email"
              placeholder="Email Address"
            />
          </div>
          <textarea
            name="faq-form"
            id="faq-desc"
            rows="6"
            placeholder="Write your message"
          ></textarea>
          <input
            className="faq-form-btn button-b"
            type="submit"
            defaultValue="Send Now"
          />
        </form>
      </div>
    </>
  );
};

export default FaqForm;
