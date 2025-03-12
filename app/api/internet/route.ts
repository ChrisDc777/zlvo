import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('Query');
  console.log("query",query);

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is missing' },
      { status: 400 }
    );
  }

  const apiUrl = `https://usw5-cai.dm-us.informaticacloud.com/active-bpel/public/rt/hmV7REr6f09d9K2gz9gMse/Search_Tool_Workflow?Query=${query}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
