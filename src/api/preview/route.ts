import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const secret = searchParams.get('secret');
    const url = searchParams.get('url'); // Get the URL from the query
    const status = searchParams.get('status');

    if (secret !== process.env.PREVIEW_SECRET) {
        return NextResponse.json({ error: 'Accès non autorisé' }, { status: 401 });
    }

    if (status === 'published') {
        const draft = await draftMode()
        await draft.disable();
    } else {
        console.log('DRAFT');
        const draft = await draftMode()
        await draft.enable();
    }


    // Correctly encode/decode
    const targetUrl = url || '/'; // Default to root if no URL
    try {
      const res = NextResponse.redirect(new URL(targetUrl, request.url));
      return res;
    } catch (error) {
      console.error("Failed to redirect", error)
      return NextResponse.json({error: "Failed to redirect"}, {status: 500})
    }
}
