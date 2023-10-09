import {NextRequest, NextResponse} from "next/server";

export const GET = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/slides/", {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });

  const data = await res.json();

  return NextResponse.json({status: 200, data});
};

// import {NextResponse} from "next/server";

// export async function GET() {
//   const res = await fetch(
//     "https://6403b8063bdc59fa8f2bad68.mockapi.io/gallery",
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       mode: "no-cors",
//     }
//   );
//   const data = await res.json();

//   return NextResponse.json({
//     status: 200,
//     data,
//   });
// }
