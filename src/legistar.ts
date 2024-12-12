const BASE_URL = 'https://webapi.legistar.com/v1/nyc';
const API_KEY = 'Uvxb0j9syjm3aI8h46DhQvnX5skN4aSUL0x_Ee3ty9M.ew0KICAiVmVyc2lvbiI6IDEsDQogICJOYW1lIjogIk5ZQyByZWFkIHRva2VuIDIwMTcxMDI2IiwNCiAgIkRhdGUiOiAiMjAxNy0xMC0yNlQxNjoyNjo1Mi42ODM0MDYtMDU6MDAiLA0KICAiV3JpdGUiOiBmYWxzZQ0KfQ'


export async function queryLegistar(): Promise<string> {
    try {
      // Quick and dirty intent parsing - just get latest 10 matters
      const url = `${BASE_URL}/matters?token=${API_KEY}&$top=10`;
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
  
      const data = await response.json();
      return JSON.stringify(data, null, 2);
    } catch (error) {
      if (error instanceof Error) {
        return `Error querying Legistar: ${error.message}`;
      }
      return 'Unknown error occurred while querying Legistar';
    }
  }