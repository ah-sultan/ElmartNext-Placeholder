const ContactUs = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 contact-form">
              <h2>Get in Touch</h2>
              <p>Send us a message and we&apos; ll respond as soon as possible</p>
              <form action="#">
                <div className="name-input">
                  <input
                    type="text"
                    name="contact-us-form"
                    id="fname"
                    placeholder="First Name*"
                    required
                  />
                  <input
                    type="text"
                    name="contact-us-form"
                    id="lname"
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div className="email-phone">
                  <input
                    type="email"
                    name="contact-us-form"
                    id="contact-email"
                    placeholder="Email Address*"
                    required
                  />
                  <input
                    type="tel"
                    name="contact-us-form"
                    id="contact-phone"
                    placeholder="Phone Number*"
                    required
                  />
                </div>
                <input
                  className="subject"
                  type="text"
                  name="contact-us-form"
                  id="subject"
                  placeholder="Subject*"
                  required
                />
                <textarea
                  name="comment-form"
                  id="comment-box"
                  rows="6"
                  placeholder="Message Here"
                ></textarea>
                <input
                  className="cotact-btn button-b"
                  type="submit"
                  formAction="#"
                  defaultValue="Send Message"
                />
              </form>
            </div>
            <div className="col-md-6 col-12 office-location-gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84823.67921346021!2d35.158402240307765!3d37.80693725194211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15299f0669c7fd73%3A0x661952d87da6a67b!2sDemirkaz%C4%B1k%20Hill!5e0!3m2!1sen!2sbd!4v1699408199748!5m2!1sen!2sbd"
                style={{ filter: "invert(100%)", border: 0 }}
                width="100%"
                height="100%"
                allowFullScreen="no"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
