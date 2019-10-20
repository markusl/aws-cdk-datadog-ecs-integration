import { expect, haveResourceLike } from '@aws-cdk/assert';
import * as ecs from '@aws-cdk/aws-ecs';
import * as cdk from '@aws-cdk/core';
import { DatadogFargateIntegration } from '../lib';

test('test datadog fargate integration construct', () => {

  // GIVEN
  const stack = new cdk.Stack();
  const taskDefinition = new ecs.TaskDefinition(stack, 'TaskDefinition', {
    compatibility: ecs.Compatibility.FARGATE,
    memoryMiB: '2048',
    cpu: '2048',
  });

  // WHEN
  new DatadogFargateIntegration(stack, 'Service', taskDefinition, {
    datadogApiKey: '/path/to/DatadogApiKey'
  });

  // THEN - stack contains a taskDefinition with Datadog definition
  expect(stack).to(haveResourceLike('AWS::ECS::TaskDefinition', 
  {
    "ContainerDefinitions": [
      {
        "Environment": [
          {
            "Name": "ECS_FARGATE",
            "Value": "true"
          },
          {
            "Name": "DD_API_KEY",
            "Value": {
              "Ref": "ServiceDatadogApiKeyParameter"
            }
          }
        ],
        "Essential": false,
        "Image": "datadog/docker-dd-agent",
        "Memory": 256,
        "Name": "dd-agent",
        "PortMappings": [
          {
            "ContainerPort": 8126,
            "Protocol": "tcp"
          },
          {
            "ContainerPort": 8125,
            "Protocol": "tcp"
          }
        ]
      }
    ],
    "Cpu": "2048",
    "Family": "TaskDefinition",
    "Memory": "2048",
    "NetworkMode": "awsvpc",
    "RequiresCompatibilities": [
      "FARGATE"
    ],
  }
  ));
});
