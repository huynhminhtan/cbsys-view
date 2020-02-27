import React from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }


    render() {
        return (
            <div>
                <h1>Hi cbsys view</h1>
            </div>
        )
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
