import React from 'react'
import img from '../../../../assets/img/card-img/M3_integrations_all_integrations.png.png'

const Teaching = () => {
  return (
    <div className='teaching-container'>
      <div className="teaching-container-content">
        <h1>Bu kursu onlardan öyrənəcəksən
        </h1>
        <div className="teaching-container-content-card-container">
          <div className="teaching-container-content-card for-img-tec">
            <div className="for-images-teacing">
              <img src={img} alt="" />
            </div>
            <div className="teaching-container-content-card-title-des">
              <h1>Mədinə İsayeva</h1>
              <p>Qrafik Dizayner</p>
            </div>
          </div>
          <div className="teaching-container-content-card for-teacing-desc-info">
            <div className="teaching-container-content-card-just-name-infarmation">
              <h1>Mədinə İsayeva</h1>
              <p>
                Qrafik dizayn, bir mesajı əyani ya da yazı yolu ilə müəyyən hədəf kütləyə çatdırmaq məqsədi ilə edilən görünə bilən hər hansı bir formada, iki ölçülü və ya üç ölçülü olaraq düzəldilən logo, kitab, animasiya, film dizaynı kimi yaradıcılıq tələb edən dizaynları yaradan təhsil sahəsidir. Qrafik dizaynın özü özlüyündə sürətlənmə, asimmetriya və ya simmetriya, vurğulama, hərəkət, nisbət yaxınlıq, təkrarlama və birlik kimi müəyyən ölçüləri ehtiva edir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Teaching