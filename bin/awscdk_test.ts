#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwscdkTestStack } from '../lib/awscdk_test-stack';

const app = new cdk.App();
new AwscdkTestStack(app, 'AwscdkTestStack');
