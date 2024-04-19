import React, { useState } from 'react'
import SectionHeading2 from '../SectionHeading/SectionHeading2'
import parser from 'html-react-parser'  
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate , Link } from 'react-router-dom';
const Price2 = ({ data, varient }) => {
  const { sectionHeadingData, pricePlan } = data;
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(0);
  return (
    <section id="pricing" className={`${varient === "st-color2" ? "" : "st-bluis-bg"}`}>
      <div className="st-height-b90 st-height-lg-b50" />
      <SectionHeading2 data={sectionHeadingData} />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="st-tabs st-fade-tabs st-style1">
              <ul className={`st-tab-links st-style2 st-type1 ${varient} st-mp0`}>
                <li className={`st-tab-title ${isActive === 0 ? "active" : ""}`} onClick={() => setIsActive(0)}>
                  <span>Plan A</span>
                </li>
                <li className={`st-tab-title ${isActive === 1 ? "active" : ""}`} onClick={() => setIsActive(1)}>
                  <span>Plan B</span>
                </li>
                <li className={`st-tab-title ${isActive === 2 ? "active" : ""}`} onClick={() => setIsActive(2)}>
                  <span>Plan C</span>
                </li>
              </ul>
              <div className="st-height-b30 st-height-lg-b30" />
              <div className="tab-content">
                {pricePlan.map((elements, index) => (
                  <div className={`st-tab ${isActive === index ? "active" : ""}`} key={index}>
                    <div className={`st-pricing-table st-style2 ${varient === "st-color2" ? "st-color2 st-type1" : varient}`}>
                      <div className="st-pricing-left">
                        <div
                          className="st-pricing-img st-dynamic-bg st-bg"
                          style={{ backgroundImage: `url(${elements.img})` }}
                        />
                      </div>
                      
                      <div className="st-pricing-right">
                        <div className="st-pricing-title" >{elements.title}</div>
                        <div style={{ borderTop: ".5px grey solid" }} ><br /></div>
                        {elements.txt}
                        <div style={{ borderBottom: ".5px grey solid" }} ><br /></div>

                        <div><br /></div>
                        <center>
      <div className="st-hero-btn-group">
        {/* Wrap the div with Link component */}
        <Link to="/chat">
          <div className="st-btn st-style1 st-color4 st-smooth-move">
            Chat
          </div>
        </Link>
      </div>
    </center>
            <br />
                      </div>
                      
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
           
            {/* .st-tabs */}
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default Price2
