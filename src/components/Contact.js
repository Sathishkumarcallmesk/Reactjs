import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 50px 0;
  background: #f0f0f0;
  text-align: center;
`;

function Contact() {
  return (
    <div className="  px-4  max-w-screen-xl mx-auto"> 
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <p>Email: sathish@example.com</p>
    </ContactSection>
    
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4  flex-wrap justify-between">
        <div className="mb-4">
          <h4 className="text-xl font-bold">My Portfolio</h4>
          <p>Transforming your ideas into digital experiences.</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold">Follow Me</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 mt-4">
        <p className="text-center text-sm">
          &copy; Designed and Developed by <span className=''> Sathish Kumar Ravi </span> 
        </p>
      </div>
    </footer>

    

    </div>
  );
}

export default Contact;

