import { SNSClient } from "@aws-sdk/client-sns";
import { PublishCommand } from "@aws-sdk/client-sns";
export async function handler(event) {
   const snsClient = new SNSClient({});

   const response = await snsClient.send(
      new PublishCommand({
        Message: "StreetSweepAlert",
        TopicArn: "arn:aws:sns:us-east-1:471112808940:streetSweepAlert",
      }),
    );
    console.log(response);

  return {
    'StatusCode': 200,
    'body': response
  }
  }