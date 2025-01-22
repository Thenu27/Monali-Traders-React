import './contact.css'

const ContactPage = ()=>{
    return(
        <>
            <div className='contact-container'>
                <div className='contact-form'>
                    <h2 className='contact-title'>Get in Touch</h2>
                    <input className='contact-input-name' type='text' placeholder='Name'/>
                    <input className='contact-input-name' type='email' placeholder='Email'/>
                    <textarea  
                        className=' contact-input-name contact-input-message'           
                        id="message" 
                        name="message" 
                        placeholder="Message"/>

                    <button className='contact-submit-btn'>Submit</button>     

                </div>
                <div className='location-container'>
                    <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.0850288503125!2d79.87973067499607!3d6.880416693118494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInNDkuNSJOIDc5wrA1Mic1Ni4zIkU!5e0!3m2!1sen!2slk!4v1732777535118!5m2!1sen!2slk" />
                </div>

            </div>

            <div className='contact-card'>
                <h2 className='contact-name'>U.C.Liyanage</h2>
                <p className='contact-location'>160/60,Poorwarama Mw<br/>
                Kirulapone,Colombo 05</p>
                
                <div className='email-phone'>
                    <p className='phone'>+94766411765</p>
                    <p className='email'>youremail@gmail.com</p>

                </div>
            </div>


        </>
    )
}

export default ContactPage