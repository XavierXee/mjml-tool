import React, { Component } from 'react';
import { BrandsProps } from '../../../interfaces/BrandsProps';
import './Brands.css';

class Brands extends Component<BrandsProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <div className="section">
                        <h3>Brands</h3>
                        <h4>baseplay</h4>
                        <p>
                            <label>
                                <input type="checkbox" name="mvpBaseplay" value="mvp" />
                                <span>MVP (without social) </span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" name="genericBrosia" value="generic" />
                                <span>Generic </span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" name="namedBrosia" value="named" />
                                <span>Named</span>
                            </label>
                        </p>
                        <label htmlFor="baseplayPreview">Preview baseplay.</label>
                        <input type="text" name="baseplay" value="" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Brands;
