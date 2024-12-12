
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
        properties: {
          command: { type: 'string' };
        };
      };
      requestHandler: (request: ToolRequest) => ToolRequestHandlerOutput;
    }
    

export function addTool(tool: ToolSchema){
    TOOLS.push(tool)
}

export const TOOLS: ToolSchema[] = [

]