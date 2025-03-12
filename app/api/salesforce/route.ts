import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get('User_Prompt');
  console.log("prompt",prompt);

  if (!prompt) {
    return NextResponse.json(
      { error: 'Prompt parameter is missing' },
      { status: 400 }
    );
  }

  const apiUrl = `https://usw5-cai.dm-us.informaticacloud.com/active-bpel/public/rt/hmV7REr6f09d9K2gz9gMse/GeminiAI_Agent_for_Salesforce?User_Prompt=${prompt}`;

  try {
    const response = await fetch(apiUrl);
    console.log("res",response);
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
