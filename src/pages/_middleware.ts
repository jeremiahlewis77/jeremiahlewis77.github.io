import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const constructionMode = process.env.NEXT_PUBLIC_CONSTRUCTION_MODE;

    if (constructionMode === 'true' && request.nextUrl.pathname !== '/construction') {
        const url = request.nextUrl.clone();
        url.pathname = '/construction';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}