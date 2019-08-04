import * as React from 'react';
import Materialize from 'materialize-css';
import moment from 'moment'
import 'moment/locale/es'
import { any } from 'prop-types';


interface IState {
    value: any;
}

interface IProps {
    label: any;
    format: any;
    onChange: any;
    formatMoment: any;
}

export default class Campaign extends React.Component<IProps, IState> {

    static defaultProps = {
        label: "CampaingDate",
        value: new Date(),
        format: 'ddd d, mmm',
        formatMoment: 'ddd D, MMM'
    };

    constructor(props: any) {
        super(props);
        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(props: any) {
        this.state = {
            value: props.value
        };
    }

    render() {
        return <div className="input-field col s6">
            <i className="material-icons prefix">date_range</i>
            <input id="date" type="text" className="datepicker queso"
                   value={moment(this.state.value).locale('es').format(this.props.formatMoment)}
            />
            <label className="active" htmlFor="date">{this.props.label}</label>
        </div>;
    }


    componentDidMount() {
        const context = this;

        const elems = document.querySelectorAll('.queso');
        Materialize.Datepicker.init(elems, {
            defaultDate: new Date(),
            format: this.props.format,
            container: 'body',
            onSelect: (date: any) => {
                context.setState({ value: context.state.value });
                context.props.onChange(date);
                // context.setState({ value: context.state.value });
                // context.props.onChange(date);
            },
            autoClose: true
        } as Partial<any>);

    }
}