import {VercelApiHandler} from "@vercel/node"

const otherRoute: VercelApiHandler = (request, response) => {
  return response.send("This is other, standart Vercel API handler outside Apollo")
}

export default otherRoute
