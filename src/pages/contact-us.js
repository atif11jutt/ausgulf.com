import React, { useReducer, useRef, useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";

const ContactUs = () => {
  const [formSubmission, setFormSubmission] = useState(null);
  const [contactDetails, setcontactDetails] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstname: '',
      lastname: '',
      email: '',
      inquiry: '',
    },
  );
  const [contactDetailsErrors, setcontactDetailsErrors] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstname: '',
      lastname: '',
      email: '',
      inquiry: '',
    },
  );
  const contactFormState = useRef(contactDetails);

  const isValid = () => {
    let valid = true;
    const { current } = contactFormState;
    setcontactDetailsErrors({ firstname: current.firstname === '' });
    setcontactDetailsErrors({ lastname: current.lastname === '' });
    setcontactDetailsErrors({ inquiry: current.inquiry === '' });
    setcontactDetailsErrors({ email: current.email === '' || !/^.+@.+\..+$/.test(current.email) });

    if (current.firstname === '') {
      valid = false;
    }
    if (current.lastname === '') {
      valid = false;
    }
    if (current.inquiry === '') {
      valid = false;
    }
    if (current.email === '' || !/^.+@.+\..+$/.test(current.email)) {
      valid = false;
    }

    return valid;
  };

  const handleInputChange = (e) => {
    setcontactDetails({ [e.target.name]: e.target.value });
    contactFormState.current[e.target.name] = e.target.value;
    isValid();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': e.target.getAttribute('name'),
          ...contactDetails,
        }),
      })
        .then(() => setFormSubmission('success'))
        .catch(() => setFormSubmission('error'));
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact Us"
        description="Australian Gulf Capital’s head office is located in Abu Dhabi, UAE. Contact us for a confidential discussion."
      />
      <Title title="Contact Us" />
      <div className="ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="hero-content">
                <p className="mb-0"><b>United Arab Emirates:</b></p>
                <p>
                  16 Floor, Al Khatem Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE
                </p>
                <p className="mb-0"><b>Australia:</b></p>
                <p>
                  Level 4 / 490 Northbourne Avenue Dickson ACT 2602
                </p>
                <p className="mb-0"><b>United States:</b></p>
                <p>
                8 The Green STE R, in the city of Dover, County of Kent, State of Delaware 19901
                </p>
                <div className="map-wrapper">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.550310237825!2d54.38640386594869!3d24.50103328422471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6654db69f649%3A0x8931516916fe26f1!2sAl%20Khatem%20Tower%20-%20Al%20Falah%20St%20-%20Jazeerat%20Al%20Maryah%20-%20Abu%20Dhabi%20Global%20Market%20Square%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sau!4v1648369751390!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="banner-form ml-3">
                <form className="row" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact" onSubmit={(e) => handleSubmit(e)}>
                  <input type="hidden" name="bot-field" />
                  <div className="form-group col-sm-6">
                    <label htmlFor="firstname">First name</label>
                    <input
                      type="text"
                      name="firstname"
                      className={`${contactDetailsErrors.firstname ? 'input-error' : ''} form-control`}
                      onChange={(e) => { handleInputChange(e); }}
                      id="firstname"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      name="lastname"
                      className={`${contactDetailsErrors.lastname ? 'input-error' : ''} form-control`}
                      onChange={(e) => { handleInputChange(e); }}
                      id="lastname"
                    />
                  </div>

                  <div className="form-group col-sm-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`${contactDetailsErrors.email ? 'input-error' : ''} form-control`}
                      onChange={(e) => { handleInputChange(e); }}
                      id="email"
                    />
                  </div>

                  <div className="form-group col-sm-12">
                    <label htmlFor="inquiry">Inquiry</label>
                    <textarea
                      name="inquiry"
                      className={`${contactDetailsErrors.inquiry ? 'input-error' : ''} form-control`}
                      onChange={(e) => { handleInputChange(e); }}
                      id="inquiry"
                    />
                  </div>

                  <div className="col-sm-12">
                    {formSubmission === 'success' && (
                      <p>
                        Thank you. We have received your message
                        {' '}
                        and will get back to you as soon as possible
                      </p>
                    )}
                    {formSubmission === 'error' && (
                      <p>
                        oops, there&apos;s been a problem sending your message.
                        {' '}
                        Please try again later.
                      </p>
                    )}
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
