import React, { Component } from 'react';
import EventRegistrationModal from './EventRegistrationModal';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: "bar",
            resumeData: {},
            sharedData: {},
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    }

    render() {
        if (this.props.eventInfo) {
            var eventName = this.props.eventInfo.name;
             var title = this.props.eventInfo.title;
            // var lastDate = this.props.sharedBasicInfo.event.lastdate;
            // var dateOfEvent = this.props.sharedBasicInfo.event.dateofevent;
        }

        return (
            <section id="event">
            <div className="col-md-12"> 
              <h1 style={{ color: "black" }}>
                <span>Events</span>
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
                                            <span className="wave">{title} </span>
                                            <br />
                                            <button onClick={showDialog && (<EventRegistrationModal/>)}>Take the Shot!</button>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
          </section>
        );
    }
}

export default Events;