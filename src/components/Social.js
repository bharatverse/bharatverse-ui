import React, { Component } from "react";

class Social extends Component {
  render() {
    if (this.props.social) {
      var sectionName = "Join our community";
      var social = this.props.social.icons.map(function (social, i) {
        return (
          <li className="list-inline-item mx-2" key={i}>
            <span>
              <div className="social-tile">
                <a href={social.url} target="_blank"  rel="noopener noreferrer">
                  <i className={social.class}></i>
                </a>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="social">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto social-icon">{social}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;
