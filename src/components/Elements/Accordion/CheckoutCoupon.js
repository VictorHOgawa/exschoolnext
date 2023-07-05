import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const CheckoutCoupon = () => {
  return (
    <div className="coupon-accordion">
      <Accordion className="accodion-style--1" preExpanded={"0"}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>
                Já é Cliente?{" "}
                <span id="showlogin">Clique aqui para realizar o Login</span>
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div id="checkout-login" className="coupon-content">
              <div className="coupon-info">
                <p className="coupon-text">
                  Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                  sed est sit amet ipsum luctus.
                </p>
                <form action="#">
                  <p className="form-row-first">
                    <label>
                      Usuário ou Email <span className="required">*</span>
                    </label>
                    <input type="text" />
                  </p>
                  <p className="form-row-last">
                    <label>
                      Senha <span className="required">*</span>
                    </label>
                    <input type="text" />
                  </p>
                  <p className="form-row">
                    <button className="e-btn e-btn-border" type="submit">
                      Login
                    </button>
                    <label>
                      <input type="checkbox" />
                      Lembre de mim
                    </label>
                  </p>
                  <p className="lost-password">
                    <a href="#">Esqueceu seu Senha?</a>
                  </p>
                </form>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CheckoutCoupon;
