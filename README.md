# Fargate service with Datadog integration

[![Version](https://img.shields.io/npm/v/aws-cdk-datadog-ecs-integration.svg)](https://www.npmjs.com/package/aws-cdk-datadog-ecs-integration)
[![npm](https://img.shields.io/npm/dt/aws-cdk-datadog-ecs-integration.svg)](https://www.npmjs.com/package/aws-cdk-datadog-ecs-integration)

Provides an easy way to integrate [Datadog](https://datadoghq.com) agent to your ECS EC2 or Fargate task definition.

## Usage

`npm install --save-dev aws-cdk-datadog-ecs-integration`

```ts
  import { DatadogFargateIntegration } from 'aws-cdk-datadog-ecs-integration';

  const stack = new cdk.Stack();
  const taskDefinition = new ecs.TaskDefinition(stack, 'TaskDefinition', {
    compatibility: ecs.Compatibility.FARGATE,
    memoryMiB: '2048',
    cpu: '2048',
  });

  // Include Datadog with the specific API key
  new DatadogFargateIntegration(stack, 'Service', taskDefinition, {
    datadogApiKey: '/path/to/DatadogApiKey'
  });
```
