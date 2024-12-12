import { queryLegistar } from "./legistar.js";

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
      requestHandler: (request: ToolRequest) => Promise<ToolRequestHandlerOutput>;
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
    async requestHandler(params) {
      console.error("legister query???", params);
      const data = await queryLegistar()
      return {
        content: [{
          type: 'text',
          text: data,
          mimeType: 'text/plain'
        }],
      };
    }
  })

  