import { queryCouncilMemberPositions, queryCouncilMembers, queryLegistar } from "./legistar.js";

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
    

export function addTool(tool: ToolSchema) {
  TOOLS.push(tool)
}

export const TOOLS: ToolSchema[] = [

]

addTool({
  name: 'get_matters',
  description: 'get matters (aka legislation, intros, bills, matters before the council).',
  inputSchema: {
    type: 'object',
    properties: {
      top: { type: 'string' },
      skip: { type: 'string' },
      year: {type: 'string'},
      },
  },
  async requestHandler(req) {
    console.error("legister query???", req);
    const data = await queryLegistar(req.params.arguments)
    return {
      content: [{
        type: 'text',
        text: data,
        mimeType: 'text/plain'
      }],
    };
  }
})

  
addTool({
  name: 'get_council_members',
  description: 'Get council members',
  inputSchema: {
    type: 'object',
    properties: {
      top: { type: 'string' },
      skip: { type: 'string' },
      activeOnly: { type: 'string' },
    },
  },
  async requestHandler(req) {
    console.error("legister query???", req);
    const data = await queryCouncilMembers(req.params.arguments);
    return {
      content: [{
        type: 'text',
        text: data,
        mimeType: 'text/plain'
      }],
    };
  }
});


addTool({
    name: 'get_council_member_positions',
    description: 'Get committee positions for a specific council member',
    inputSchema: {
      type: 'object',
      properties: {
        top: { type: 'string' },
        personId: { type: 'string' }
      },
    },
    async requestHandler(req) {
      console.error("legister query???", req);
      const data = await queryCouncilMemberPositions(req.params.arguments);
      return {
        content: [{
          type: 'text',
          text: data,
          mimeType: 'text/plain'
        }],
      };
    }
  });
  