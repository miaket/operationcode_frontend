import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
// import FormInput from 'shared/components/form/formInput/formInput';
import { WORKINFO } from 'shared/constants/status';

class WorkInfo extends Component {

  render() {
    return (
      <Form>
        <FormSelect
          id="WorkInfo"
          options={WORKINFO}
          prompt="Current Employment Status"
          onChange={e => this.props.update(e, e.target.value)}
        />
        <input
          id="role"
          placeholder="Job Role"
          onChange={e => this.props.update(e, e.target.value)}
        />
        <input
          id="company"
          placeholder="Company Name"
          onChange={e => this.props.update(e, e.target.value)}
        />
      </Form>
    );
  }
}

WorkInfo.propTypes = {
  update: PropTypes.func
};

WorkInfo.defaultProps = {
  update: null
};

export default WorkInfo;
