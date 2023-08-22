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



## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
