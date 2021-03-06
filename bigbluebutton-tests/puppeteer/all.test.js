const audioTest = require('./audio.obj');
const breakoutTest = require('./breakout.obj');
const chatTest = require('./chat.obj');
const customParametersTest = require('./customparameters.obj');
const notificationsTest = require('./notifications.obj');
const pollingTest = require('./polling.obj');
const presentationTest = require('./presentation.obj');
const screenShareTest = require('./screenshare.obj');
const sharedNotesTest = require('./sharednotes.obj');
const userTest = require('./user.obj');
const virtualizedListTest = require('./virtualizedlist.obj');
const webcamTest = require('./webcam.obj');
const webcamLayout = require('./webcamlayout.obj');
const whiteboardTest = require('./whiteboard.obj');
const stressTest = require('./stress.obj');

process.setMaxListeners(Infinity);

describe('Audio', audioTest);
describe('Chat', chatTest);
describe('Breakout', breakoutTest);
describe('Custom Parameters', customParametersTest);
describe('Notifications', notificationsTest);
describe('Polling', pollingTest);
describe('Presentation', presentationTest);
describe('Screen Share', screenShareTest);
describe('Shared Notes ', sharedNotesTest);
describe('User', userTest);
describe('Virtualized List', virtualizedListTest);
describe('Webcam', webcamTest);
describe('Webcam Layout', webcamLayout);
describe('Whiteboard', whiteboardTest);
if (process.env.STRESS_TEST === 'true') {
  describe('Stress', stressTest);
};
