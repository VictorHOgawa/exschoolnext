import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const CheckoutCouponTwo = () => {
  return (
    <div className="coupon-accordion">
      <Accordion className="accodion-style--2" preExpanded={"0"}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>
                Tem um Cupom?{" "}
                <span id="showcoupon">Clique aqui para inserir seu Código</span>
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div id="checkout_coupon" className="coupon-checkout-content">
              <div className="coupon-info">
                <form action="#">
                  <p className="checkout-coupon">
                    <input type="text" placeholder="Cupom" />
                    <button className="e-btn e-btn-border" type="submit">
                      Aplicar Cupom
                    </button>
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

export default CheckoutCouponTwo;
