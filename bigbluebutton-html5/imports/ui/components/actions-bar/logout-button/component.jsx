import React, { PureComponent } from 'react';
//import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { withModalMounter } from '/imports/ui/components/modal/service';
import { makeCall } from '/imports/ui/services/api';
import Button from '/imports/ui/components/button/component';

import { styles } from '../styles';

const intlMessages = defineMessages({
  leaveSessionLabel: {
    id: 'app.navBar.settingsDropdown.leaveSessionLabel',
    description: 'Leave session button label',
  },
  leaveSessionDesc: {
    id: 'app.navBar.settingsDropdown.leaveSessionDesc',
    description: 'Describes leave session option',
  },
});

const propTypes = {
  //intl: intlShape.isRequired,
  isMeteorConnected: PropTypes.bool.isRequired,
  mountModal: PropTypes.func.isRequired,
};

const ALLOW_LOGOUT = Meteor.settings.public.app.allowLogout;

class LogoutButton extends PureComponent {
  constructor(props) {
    super(props);

    //this.state = {
    //  isSettingOpen: false,
    //  isFullscreen: false,
    //};

    // Set the logout code to 680 because it's not a real code and can be matched on the other side
    this.LOGOUT_CODE = '680';

    this.leaveSession = this.leaveSession.bind(this);
  }

  leaveSession() {
    document.dispatchEvent(new Event('exitVideo'));

    makeCall('userLeftMeeting');
    // we don't check askForFeedbackOnLogout here,
    // it is checked in meeting-ended component
    Session.set('codeError', this.LOGOUT_CODE);
    // mountModal(<MeetingEndedComponent code={LOGOUT_CODE} />);
  }

  render() {
    const {
      intl,
      isMeteorConnected,
    } = this.props;

    const allowLogoutSetting = isMeteorConnected && ALLOW_LOGOUT;

    return (
            !allowLogoutSetting ? null
            : (<Button
               className={styles.button}
               icon="logout"
               label={intl.formatMessage(intlMessages.leaveSessionLabel)}
               description={intl.formatMessage(intlMessages.leaveSessionDesc)}
               color="danger"
               //   ghost={!isVideoBroadcasting}
               hideLabel
               circle
               size="lg"
               onClick={() => this.leaveSession()}
               />
              )
      );
  }
}

LogoutButton.propTypes = propTypes;
export default withModalMounter(injectIntl(LogoutButton));

