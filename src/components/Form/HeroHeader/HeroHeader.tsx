import React, { Component } from 'react';
import { HeroHeaderProps } from '../../../interfaces/HeroHeaderProps'

import './HeroHeader.css';

class HeroHeader extends Component<HeroHeaderProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <div className="section">
                        <h4>Hero Header</h4>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Hero Image</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <label htmlFor="backgroundHeight">Background Height PX
                            <input type="number" name="backgroundHeight" value="" />
                        </label>
                    </div>
                    <div className="section">
                        <label htmlFor="cta1">Text CTA Hero
                            <input type="text" name="cta1" value="" />
                        </label>
                        <label htmlFor="url1">Relative URL Hero Header
                            <input type="text" name="url1" value="" placeholder="/stream/documentaries/nation-and-regions/item/3062" />
                        </label>
                    </div>
                </div>
            </div>
        );
    }

}

export default HeroHeader;
