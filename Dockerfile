FROM public.ecr.aws/lambda/nodejs:20

# Copy function code
COPY lambda.mjs actions/publish-topic.mjs libs/snsClient.mjs ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda.handler" ]