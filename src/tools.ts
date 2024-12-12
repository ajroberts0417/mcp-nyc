
type ToolRequestHandlerOutput = {
    content: {
      type: 'text' | 'json';
      text: string;
      mimeType: 'text/plain' | 'application/json';
    }[]
  }

  type ToolRequest = {
    params: {
        name: string
        arguments?: Record<string, unknown>
    }
  }
  
  type ToolSchema = {
      name: string;
      description: string;
      inputSchema: {
        type: 'object';
        properties: Record<string, { type: 'string' }>; // other types are available, but i don't know what they are now.
      };
      requestHandler: (request: ToolRequest) => ToolRequestHandlerOutput;
    }
    

export function addTool(tool: ToolSchema){
    TOOLS.push(tool)
}

export const TOOLS: ToolSchema[] = [

]

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
