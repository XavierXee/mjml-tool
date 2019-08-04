import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { CampaignProps } from '../../../interfaces/CampaignProps';

import './Campaign.css';

class Campaign_OLD extends Component<CampaignProps> {

    constructor(props: any) {
        super(props);
    }

    handleChange(event:any): void {
        console.log(event.target.value);
        this.props.onChange('campaignDate', event.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <div className="section">
                        <label htmlFor="date">Campaign's date
                            {/*<DatePicker selected={new Date(this.props.campaignDate)}*/}
                                        {/*onSelect={this.handleSelect}*/}
                                        {/*onChange={this.handleChange} />*/}
                            <input type="date" name="date" value="" onChange={this.handleChange} />
                        </label>
                    </div>
                </div>
            </div>
        );
    }

}

export default Campaign_OLD;
