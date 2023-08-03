const versions = {
  'version':                '8.8.1',
  // bare_version never includes -alpha or -beta
  'bare_version':           '8.8.1',
  'logstash_version':       '8.8.1',
  'elasticsearch_version':  '8.8.1',
  'kibana_version':         '8.8.1',
  'apm_server_version':     '8.8.1',
  'branch':                 '8.8',
  'minor-version':          '8.8',
  'major-version':          '8.x',
  'prev-major-version':     '7.x',
  'prev-major-last':        '7.17',
  'major-version-only':     '8',
  'ecs_version':            '8.8',
  'kinesis_version':        'master',

  // Keep the :esf_version: attribute value as master.
  'esf_version':            'master',

  // release-state can be: released | prerelease | unreleased
  'release-state':          'released',

  // is-current-version can be: true | false
  'is-current-version':    'true',

  // hide-xpack-tags defaults to "false" (they are shown unless set to "true")
  'hide-xpack-tags':       'true',

  // APM Agent versions
  'apm-go-branch':         '2.x',
  'apm-ios-branch':        '0.x',
  'apm-java-branch':       '1.x',
  'apm-rum-branch':        '5.x',
  'apm-node-branch':       '3.x',
  'apm-php-branch':        '1.x',
  'apm-py-branch':         '6.x',
  'apm-ruby-branch':       '4.x',
  'apm-dotnet-branch':     '1.x',

  // ECS Logging
  'ecs-logging':           'master',
  'ecs-logging-go-logrus': 'master',
  'ecs-logging-go-zap':    'master',
  'ecs-logging-java':      '1.x',
  'ecs-logging-dotnet':    'master',
  'ecs-logging-nodejs':    'master',
  'ecs-logging-php':       'master',
  'ecs-logging-python':    'master',
  'ecs-logging-ruby':      'master',
}

module.exports = versions