
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
    /*
    properties: {
      command: { type: 'string' };
    };
    */
  } | Record<string, any>;
  requestHandler: (params: any) => ToolRequestHandlerOutput;
}

export const TOOLS: ToolSchema[] = [];

export function addTool(tool: ToolSchema) {
  TOOLS.push(tool)
}

addTool({
  name: 'run_legistar_api',
  description: 'Run a legistar api query',
  inputSchema: {
    type: 'object',
    properties: {
      legistar_intent: { type: 'string' },
    },
  },
  requestHandler(params) {
    console.error("legister query???", params);
    return {
      content: [{
        type: 'text',
        text: "this is a generic output for the legistar API",
        mimeType: 'text/plain'
      }],
    };
  }
})


//     requestHandler: () => {content: [{ type: 'text', text: "this is a generic output for the legistar API", mimeType: 'text/plain' }]},
// ]