import React, { Component } from "react";

class ReplyForm extends Component {
  render() {
    return (
      <div className="blog__comment">
        <h3>Escreva um Comentário</h3>
        <form action="#">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="blog__comment-input">
                <input type="text" placeholder="Seu Nome" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="blog__comment-input">
                <input type="email" placeholder="Seu Email" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__comment-input">
                <input type="text" placeholder="Site" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__comment-input">
                <textarea placeholder="Digite seu Comentário ..."></textarea>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__comment-agree d-flex align-items-center mb-20">
                <input className="e-check-input" type="checkbox" id="e-agree" />
                <label className="e-check-label" htmlFor="e-agree">
                  Salvar meu nome, email e site nesse navegador para a próxima
                  vez que comentar.
                </label>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__comment-btn">
                <button type="submit" className="e-btn">
                  Postar comentário
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ReplyForm;
