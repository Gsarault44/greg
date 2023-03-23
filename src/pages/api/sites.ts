import type { NextApiRequest, NextApiResponse } from 'next';
import { projects } from '../../pages/index';
const ogs = require('open-graph-scraper');

//const data = { key: 'a098b37f47c7d4d4dfdf96972fe426ed', q: 'https://advisorinnovationlabs.com/' };
  
type Data = {
  title: string;
  description: string;
  image: string;
  url: string;
  error: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // let response;
  // response = Promise.all(projects.map(project => fetch("https://api.linkpreview.net/?key=", {
  //   method: "POST",
  //   mode: "cors",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(project)
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     console.log(response)
  //     res.status(200).json(response)
  //     console.log(response);
  // })))

}

