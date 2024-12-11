
type ToolRequestHandlerOutput = {
  content: {
    type: 'text' | 'json';
    text: string;
    mimeType: 'text/plain' | 'application/json';
  }[]
}

type ToolSchema = {
    name: string;
    description: string;
    inputSchema: {
      type: 'object';
      properties: {
        command: { type: 'string' };
      };
    };
    requestHandler: () => ToolRequestHandlerOutput;
  }
  