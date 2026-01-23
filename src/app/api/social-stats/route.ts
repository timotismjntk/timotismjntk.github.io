import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch data dari GitHub API
    const githubRes = await fetch('https://api.github.com/users/timotismjntk', {
      next: { revalidate: 3600 } // Cache data selama 1 jam
    });
    const githubData = await githubRes.json();

    return NextResponse.json({
      github: githubData.followers || 0,
    });
  } catch (error) {
    return NextResponse.json({ github: 0 }, { status: 500 });
  }
}