import React from "react";
import "./Section2.scss";

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="section__title">
          <div className="section2__title__text1">INDUSTRY WE OFFER</div>
          <div className="section2__title__text2">
            <h2> Managed IT services customized for your industry</h2>
          </div>
          <div className="section2__title__text3">
            <p>
              We understand the complexities of modern markets and translate
              them into real business solutions for automotive, financial,
              insurance, pharma & life sciences,
            </p>
          </div>
        </div>
        <div className="section2__cards">
            <div className="section2__cards__card">
                <div className="section2__cards__card__img">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg" alt="" />
                </div>
                <p>Industries &  Manufacturing</p>
            </div>

            <div className="section2__cards__card">
                <div className="section2__cards__card__img">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services2.svg" alt="" />
                </div>
                <p>Industries &  Manufacturing</p>
            </div>

            <div className="section2__cards__card">
                <div className="section2__cards__card__img">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services3.svg" alt="" />
                </div>
                <p>Industries &  Manufacturing</p>
            </div>

            <div className="section2__cards__card">
                <div className="section2__cards__card__img">
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services4.svg" alt="" />
                </div>
                <p>Industries &  Manufacturing</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
