import { SNSClient } from "@aws-sdk/client-sns";
import { PublishCommand } from "@aws-sdk/client-sns";
export async function handler(event) {
   const snsClient = new SNSClient({});

   async (
    message = "STREET SWEEP",
    topicArn = "streetSweepAlert",
  ) => {
    const response = await snsClient.send(
      new PublishCommand({
        Message: message,
        TopicArn: topicArn,
      }),
    );
    console.log(response);
  }

  }