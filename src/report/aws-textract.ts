// Import required AWS SDK clients and commands for Node.js
import { AnalyzeDocumentCommand } from '@aws-sdk/client-textract';
import { TextractClient } from '@aws-sdk/client-textract';

// Set the AWS Region.
const REGION = 'us-east-1'; //e.g. "us-east-1"

export class OCRConverter {
  params: any;

  constructor(bucket: string, key: string) {
    // Set params
    this.params = {
      Document: {
        S3Object: {
          Bucket: bucket,
          Name: key,
        },
      },
      FeatureTypes: ['TABLES', 'FORMS'],
    };
  }

  async analyze_document_text() {
    const textractClient = new TextractClient({
      region: REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
      },
    });
    try {
      const analyzeDoc = new AnalyzeDocumentCommand(this.params);
      const response = await textractClient.send(analyzeDoc);
      let result = '';
      response.Blocks!.forEach((block) => {
        if ('Text' in block && block.Text !== undefined) {
          console.log(block.Text);
          result = result.concat(` ${block.Text}`);
        }
      });
      return result;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
