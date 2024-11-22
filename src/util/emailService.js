import emailjs from 'emailjs-com';
const serviceID = 'service_ewq2on9';  
const templateID = 'template_qtumgwt';
const publicKey = 'iiR7i3IIIn8v6irbh';  // Replace with your EmailJS Public API Key


export function sendEmail(form) {
    return emailjs.sendForm(serviceID, templateID, form, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        return { success: true };
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        console.log('Error details:', error.response || error);
        return { success: false, error };
      });
  }
  