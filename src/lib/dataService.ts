import { promises as fs } from 'fs';
import path from 'path';

export async function getProjectData() {
  // 1. Get the path to the JSON file
  const jsonDirectory = path.join(process.cwd(), 'src/app/data');
  
  // 2. Read the JSON file contents
  const fileContents = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');
  
  // 3. Parse the data into a JavaScript object
  const data = JSON.parse(fileContents);
  
  return data;
}