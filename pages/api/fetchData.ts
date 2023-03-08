// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Content } from "../Content";

const contentItem1: Content = {
    id: 1,
    description: "This is my first content item",
    type: "Bad"
}

const contentItem2: Content = {
    id: 2,
    description: "This is another",
    type: "good"
}

const contentItem3: Content = {
    id: 3,
    description: "This content that is different from the rest. This content that is different from the rest.",
    type: "Bad"
}

const contentItem4: Content = {
    id: 4,
    description: "This is my last content item",
    type: "Bad"
}

const data: Content[] = [
    contentItem1, contentItem2, contentItem3, contentItem4
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Content[]>
) {
  res.status(200).json(data)
}
