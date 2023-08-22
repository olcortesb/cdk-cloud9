
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cloud9 from 'aws-cdk-lib/aws-cloud9';

export class CdkCloud9Stack extends cdk.Stack {
  constructor(scope: cdk.App , id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a VPC for the Cloud9 environment
    const vpc = new ec2.Vpc(this, 'Cloud9Vpc', {
      maxAzs: 3, // Adjust as needed
    });

    // Create the Cloud9 environment
    new cloud9.CfnEnvironmentEC2(this, 'MyCloud9Environment', {
      instanceType: this.node.getContext('instance_type'), // Adjust as needed
      connectionType: 'CONNECT_SSM',
      name: this.node.getContext("name"),
      ownerArn: this.node.getContext("user_arn"),
      subnetId: vpc.publicSubnets[0].subnetId,
    });
  }
}
