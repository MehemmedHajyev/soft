import React, { useEffect } from 'react'
import CoppyRight from './CoppyRight'
import { useState } from 'react';


const Footer = () => {
  const [emailSubs, setEmail] = useState('');
  const [socialss, setSocials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.softwarevillage.az/api/core/socials`, {
          method: 'GET',
          mode: 'no-cors',
        });
        const data = await response.json();
        setSocials(data);
      } catch (error) {
        console.log();
      }
    };
    setSocials(fetchData());
  }, []);


  const data = new FormData();
  data.append('email', emailSubs);

  const handleSubscription = async () => {
    await fetch(`https://api.softwarevillage.az/api/core/subscription`, {
      method: 'POST',
      mode: 'no-cors',
      header: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  }

  {
    
   function handleSubscription(){
    setEmail('');
 }

  }

  // return (
  //   <>
  //     <div className="water-container">
  //       <div className="water-container-content">
  //         <div>
  //           <p className="footer-title">Bizimlə əlaqə saxlayın</p>
  //           <div className="footer-search-container">
  //             <input type="email" placeholder='Email ünvanı qeyd edin:'
  //               value={emailSubs} onChange={(e) => setEmail(e.target.value)}
  //             />
  //             <button onClick={handleSubscription}>Göndər</button>


  //           </div>
  //           <ul className="footer-list">
  //             <li>
  //               <a href="/">Təlim proqramları</a>
  //             </li>
  //             <li>
  //               <a href="about">Haqqımızda</a>
  //             </li> <li>
  //               <a href="">Bloq</a>
  //             </li> <li>
  //               <a href="">Əlaqə</a>
  //             </li>

  //           </ul>
  //           <CoppyRight />
  //         </div>
  //       </div>
  //     </div>

  //     <div class="container">

  //     </div>
  //   </>

  // )
}

export default Footer