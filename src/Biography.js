import React from 'react';
import Bio from './Bio';
import './Biography.css'; 

const Biography = () => {
 
  const profiles = [
    { name: 'Alperen ER', age: 18, occupation: 'Öğrenci', hobbies: ['Fotoğrafçılık', 'Seyahat', 'Yazılım'] ,lng:['HTML, ', 'CSS, ' , 'React' ] },
    { name: 'Hakan ER', age: 42, occupation: 'Öğretmen', hobbies: ['Kitap Okumak', 'Kamp Yapmak', 'Yüzme'], lng:['Python ,', 'C ,' , 'C++' ]},
   
  ];

  return (
    <div className="biography-container">
      <h1 className="biography-title">Biyografi Sayfası</h1>
      {profiles.map((profile, index) => (
        <Bio key={index} {...profile} />
      ))}
    </div>
   
  );

};

export default Biography;
