
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
    

// export function addTool(tool: ToolSchema){
//     TOOLS.push(tool)
// }

// export const TOOLS: ToolSchema[] = [
//     requestHandler: () => {content: [{ type: 'text', text: "this is a generic output for the legistar API", mimeType: 'text/plain' }]},
// ]