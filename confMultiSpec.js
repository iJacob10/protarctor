exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
	  'shardTestFiles': true,
      'maxInstances': 2
    },
  
    framework: 'jasmine',
    specs: [
        'multiSpec1.js',
        'multiSpec2.js'
    ],

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
};