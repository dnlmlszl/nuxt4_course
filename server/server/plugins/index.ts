import { getEmployees } from '../utils';

export default defineNitroPlugin((nitroApp) => {
  // console.log('Nitro run');

  nitroApp.hooks.hook('request', async (event) => {
    // console.log('Run on request');

    try {
      const result = await getEmployees();

      console.log('Employees: ', result);

      event.context.employeeList = result;
    } catch (error) {
      console.log(error);
    }
  });

  nitroApp.hooks.hook('beforeResponse', (event) => {
    console.log('Run before response');
  });

  nitroApp.hooks.hook('afterResponse', (event) => {
    console.log('Run after response');
  });

  nitroApp.hooks.hook('error', (event) => {
    console.log('Run on error');
  });
});
