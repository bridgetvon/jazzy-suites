import contactStyles from '../styles/Contact.module.css'


export default function Contact() {
    return (
        <div className={contactStyles.main}>
        <h1>CONTACT US</h1>
        <section className={contactStyles.contactSection}>
          <div className={contactStyles.contactInfo}> 
          <ul>
              <li> 801-325-2105</li>
              <li> bizdev@utahjazz.com </li>
              <li> With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.</li>
          </ul>
           </div>
            <div className={contactStyles.contactDiv}>
              <form className={contactStyles.contactForm}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input className={contactStyles.contactForm}
                    type="text"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address:</label>
                  <input className={contactStyles.contactForm}
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="email">Phone Number:</label>
                  <input className={contactStyles.contactForm}
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="email">Options</label>
                  <input className={contactStyles.contactForm}
                    type="options"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea className={contactStyles.contactForm}
                    name="message"
                  
                    rows="5"
                  />
                </div>
          
                <button className={contactStyles.submitBtn}>Submit</button>
              </form>
            </div>
            </section>
        </div>
      );
    }
