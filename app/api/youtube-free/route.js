export async function POST(req) {
  const { topic, genre } = await req.json()
  const script = `YOUTUBE SCRIPT: ${topic}

[HOOK]
Start with something surprising!

[INTRO]
Today about ${topic}.

[MAIN]
Key points here.

[CTA]
Comment, like, subscribe!

Use FREE AI models.`
  const titles = `Title Ideas:
1. The Real Reason ${topic}
2. ${topic} Explained
3. Why ${topic} Matters
4. Most People Get ${topic} Wrong
5. The Truth About ${topic}`
  return Response.json({ script, titles })
}
