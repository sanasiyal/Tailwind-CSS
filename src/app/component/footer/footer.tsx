const Footer=()=>{
    return(
      <div>
      <div className="text-white flex space-x-48 ml-48 mt-10 h-48">
          <div>
            <h1 className="text-2xl underline-offset-8 underline decoration-red-600">Company</h1> <br />
            <p>About us</p>
            <p>Our Services</p>
            <p>privacy policies</p>
          </div>
  
          <div>
            <h1 className="text-2xl underline-offset-8 underline decoration-red-600">Get help</h1> <br />
            <p>FAQ</p>
            <p>Oreder status</p>
            <p>paymere options</p>
          </div>
  
          <div>
            <h1 className="text-2xl underline-offset-8 underline decoration-red-600">Follow us</h1> <br />
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          
      </div>
      <h1 className="text-center text-white">Copyright © 2024</h1>
      </div>
    ) 
    
  }
  export default Footer;