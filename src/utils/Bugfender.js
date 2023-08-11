import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
	appKey: '01QCPGoYXVR75KKwX2uAO86kAOAYBY1I',
});


export const logToBugfender = (componentName, message) => {
  Bugfender.log(componentName, message);
};