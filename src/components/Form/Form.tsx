import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Campaign_OLD from "./Campaign/Campaign";
import HeroHeader from './HeroHeader/HeroHeader';
import EmailBody from "./EmailBody/EmailBody";
import Brands from "./Brands/Brands";

import { FormProps } from '../../interfaces/FormProps'

import './Form.css';
import Campaign from "./Campaign/Campaign";

class Form extends Component<{}, FormProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            formData: {
                campaignDate: new Date(),
                heroImage: '',
                heroBackgroundHeight: null,
                heroTextCta: '',
                heroHeaderRelativeUrl: '',
                templateType: '',
                bodyImage: '',
                bodyTextCta: '',
                bodyRelativeUrl: '',
                brands: []
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit (): void {
        console.log(this.state);
        // console.log(this.state.formData);
        alert('submitted');
    }

    updateValue(key: string, value:any) {
        this.setState({formData: Object.assign({}, this.state.formData, {[key]: value})});
    }

    handleChangeCampaignDate(date: Date) {
        const formData = {...this.state.formData};
        formData.campaignDate = date;
        this.setState({formData})
    }

    render() {

        console.log(this.state);

        return (
            <div className="Form">
                <Campaign label="CampaingDate"
                          value={this.state.formData.campaignDate}
                            onChange={(date: Date) => {this.updateValue('campaignDate', date)}}/>
                {/*<Campaign label="CampaingDate"*/}
                          {/*value={this.state.formData.campaignDate}*/}
                          {/*onChange={(date: Date) => {this.handleChangeCampaignDate(date)}}/>*/}
                <div className="divider"></div>
                <HeroHeader heroImage={this.state.formData.heroImage}
                            heroBackgroundHeight={this.state.formData.heroBackgroundHeight}
                            heroTextCta={this.state.formData.heroHeaderRelativeUrl}
                            heroHeaderRelativeUrl={this.state.formData.heroHeaderRelativeUrl} />
                <div className="divider"></div>
                <EmailBody templateType={this.state.formData.templateType}
                            bodyImage={this.state.formData.bodyImage}
                            bodyTextCta={this.state.formData.bodyTextCta}
                            bodyRelativeUrl={this.state.formData.bodyRelativeUrl} />
                <div className="divider"></div>
                <Brands brands={this.state.formData.brands} />
                <Button
                    onClick={this.handleSubmit}
                    className="main--button waves-effect waves-light btn btn-large"
                    variant="light"
                    type='submit'>
                    Submit
                </Button>
            </div>
        );
    }

}

export default Form;
