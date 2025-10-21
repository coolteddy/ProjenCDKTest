import { App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Create a simple S3 bucket
    new s3.Bucket(this, 'MySimpleBucket', {
      removalPolicy: RemovalPolicy.DESTROY, // Not for production
      autoDeleteObjects: true // Not for production
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'ProjenCDKTest-dev', { env: devEnv });
// new MyStack(app, 'ProjenCDKTest-prod', { env: prodEnv });

app.synth();