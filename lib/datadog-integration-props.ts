import * as ecs from '@aws-cdk/aws-ecs';

/** The properties for the Datadog integration. */
export interface DataDogIntegrationProps {
  /**
   * The name of the SSM parameter that stores the Datadog API key.
   */
  readonly datadogApiKey: string;

  /**
   * The Datadog configuration parameters.
   * You might want to specify at least `DD_TAGS` and `DD_APM_ENABLED`.
   * See https://docs.datadoghq.com/agent/docker/?tab=standard
   */
  readonly environment?: {
    [key: string]: string;
  } | undefined;

  /**
   * The logging configuration for Datadog container.
   */
  readonly logging?: ecs.LogDriver | undefined;
}
