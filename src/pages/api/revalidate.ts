// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { verifyWebhookSignature } = require("@graphcms/utils")

type Data = {
  message?: string
  revalidated: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const secret = process.env.REVALIDATE_KEY;
  const body = req.body;
  const signature = req.headers['gcms-signature'];
  const isValid = verifyWebhookSignature({body, signature, secret})

  if (isValid) {
    try {
      await res.unstable_revalidate('/projects')
      return res.json({revalidated:true})

    } catch (err) {
      return res.status(500).json({message: "Error revalidating", revalidated: false})
    }

  } else {
    return res.status(401).json({ message: 'Invalid token', revalidated: false});
  }
}
