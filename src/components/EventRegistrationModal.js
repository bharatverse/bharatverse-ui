import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class EventRegistrationModal extends Component {

    constructor(props) {
        //  super(props);
        this.state = { value: '', team: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    Team(props) {
        if (this.state.team) {
            return (
                <label>
                    Number of members:
                    <input type="number" name="Number of members" />
                </label>
            );
        }
    }

    render() {
        return (<Modal>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    EmailID:
                    <input type="email" name="emailID" />
                </label>
                <label>
                    Team/Individual:
                    <select value={this.state.team} onChange={this.handleChange}>
                        <option value="Team">Team</option>
                        <option value="Individual">Individual</option>
                    </select>
                </label>


                <input type="submit" value="Submit" />
            </form>
        </Modal>
        );
    }
}
export default EventRegistrationModal;