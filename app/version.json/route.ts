// Published as /version.json so an open copy of the app can compare its build with the live one.
export const dynamic = 'force-static';

export function GET() {
  return Response.json({ id: process.env.NEXT_PUBLIC_BUILD_ID ?? 'dev' });
}
