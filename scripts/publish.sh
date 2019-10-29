#!/bin/bash

bash ./deploy.sh

aws lambda publish-version --function-name RelaxFMRadioAlexaHandler
echo 'publish done'