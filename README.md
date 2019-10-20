# Fargate service with Datadog integration

Usage:

```ts
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
