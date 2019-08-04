import React, { Component } from 'react';
import { EmailBodyProps } from '../../../interfaces/EmailBodyProps';

import './EmailBody.css';

class EmailBody extends Component<EmailBodyProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s6">
                        <div className="section">
                            <h4>Email body</h4>
                            <span>Type of Template</span>
                            <br />
                            <div className="EmailBody-checkbox-element EmailBody-checkbox-element__first">
                                <label className="EmailBody-checkbox-element-label">
                                    <img className="EmailBody-checkbox-element-img" src="images/triptych.png"></img>
                                    <span>Tri-part</span>
                                    <input className="EmailBody-checkbox-element-input with-gap" type="radio" name="radio" value="triptych" />
                                </label>
                            </div>
                            <div className="EmailBody-checkbox-element">
                                <label className="EmailBody-checkbox-element-label">
                                    <img className="EmailBody-checkbox-element-img" src="images/lastadded_darktheme.png"></img>
                                    <span>Latest Added (dark theme)</span>
                                    <input className="EmailBody-checkbox-element-input with-gap" type="radio" name="radio" value="lastadded" />
                                </label>
                            </div>
                            <div className="EmailBody-checkbox-element">
                                <label className="EmailBody-checkbox-element-label">
                                    <img className="EmailBody-checkbox-element-img" src="images/one.png"></img>
                                    <span>Only One</span>
                                    <input className="EmailBody-checkbox-element-input with-gap" type="radio" name="radio" value="one" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <div className="section">
                            <h4>body image</h4>
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>body Image</span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>
                            <label htmlFor="bodyHeight">body image PX
                                <input type="number" name="bodyHeight" value="" />
                            </label>
                        </div>
                        <div className="section">
                            <label htmlFor="cta2">Text CTA body
                                <input type="text" name="cta2" value="" />
                            </label>
                            <label htmlFor="url2">Relative URL body item
                                <input type="text" name="url2" value=""
                                       placeholder="/stream/documentaries/nation-and-regions/item/3062" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default EmailBody;
