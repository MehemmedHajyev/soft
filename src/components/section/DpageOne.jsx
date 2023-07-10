import React from 'react'
import img from '../../assets/img/blog-card-img/img.png'
const DpageOne = () => {
    return (
        <div
            className='dpage-one-container'>
            <div className="dpage-one-card">
                <div className="dpage-one-card-content">
                    <h1 className='dpage-one-card-content-title'>Kiber Təhlükəsizlik nədir?</h1>
                    <p className='dpage-one-card-content-desc'>Kibertəhlükəsizlik, kompüter təhlükəsizliyi və ya informasiya texnologiyaları təhlükəsizliyi (İT təhlükəsizliyi) – kompüter
                        sistemləri və şəbəkələrinin icazəsiz şəkildə məlumatların açıqlanması, oğurlanması və ya texniki vasitələr, proqram
                        təminatı və ya verilənlərin (data) zədələnməsi ilə nəticələnə
                        bilən zərərli aktorlar tərəfindən hücumdan, habelə proqram təminatının pozulmasından və ya yanlış istiqamətləndirilməsindən
                        təhlükəsizliyini qorumağı bizdən tələb edir. İstər fiziki şəxslər, istərsə də bizneslər texnologiyanın gətirdiyi üstünlüklərlə daxili və xarici kiber hücumlardan özlərini müdafiə etməyə çalışırlar. </p>
                </div>
            </div>
            <div className="dpage-one-card">
                <img src={img} alt="" />
            </div>


        </div>
    )
}

export default DpageOne