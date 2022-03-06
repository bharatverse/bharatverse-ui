import React, { Component } from "react";


class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12"> 
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-24">
                        <div className="col-md-24 center">
                            <div className="col-md-24">
                                
                                    <div className="card-header">
                                    </div>
                                    <div
                                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                                        style={{
                                            height: "auto",
                                            fontSize: "132%",
                                            lineHeight: "200%",
                                        }}
                                    >
                                        <br />
                                        <span className="wave">{about} </span>
                                        <br />
                                        <br />
                                        
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
      </section>
    );
  }
}

export default About;
