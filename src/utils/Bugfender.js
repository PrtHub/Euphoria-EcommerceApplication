import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
	appKey: '01QCPGoYXVR75KKwX2uAO86kAOAYBY1I',
});

const logEvent = (tag, message) => {
	Bugfender.d(tag, message);
  };

  const logError = (errorTag, error) => {
	Bugfender.e(errorTag, error);
  };
  
  export default { logEvent, logError };

  