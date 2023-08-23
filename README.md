# Deploy a cloud9 with CDK

This CDK project allows you create a cloud9 environment for a spesific user arn

Change in this file `cdk.json` the value of variables:

```js
"name": "Cloud9Env",
"user_arn": "arn:aws:iam::ACCOUNT-NUMBER:NAME",
"instance_type": "t2.micro"
```
Remplace the ACCOUNT-NUMBER and NAME

To view the arn of a specific user run the following command

```bash
aws sts get-caller-identity --query 'Arn' --output text
```

# Configure cloud9 by CDK 

- Create github respository 
  - https://github.com/olcortesb/cdk-cloud9 

## Get Started

```bash
# Install
npm install -g aws-cdk

# CDK version
cdk --version

# CDK Bootsraping
cdk bootstrap aws://ACCOUNT-NUMBER/REGION

```
## Hello World

```bash
# Created directory 
mkdir hello-cdk
cd hello-cdk

# Initialize template App
cdk init app --language typescript
```

## Destroy Stack

```bash
cdk destroy HelloCdkStack
```
# References:
- [CDK Cloud 9 Sample code](https://awsbloglink.wordpress.com/2019/05/17/en-aws-cdk-cloud9/)

- [CDK Profiles](https://bobbyhadz.com/blog/aws-cdk-use-different-profile)

- [CDK Get Started](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

- [CDK Hello World](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
