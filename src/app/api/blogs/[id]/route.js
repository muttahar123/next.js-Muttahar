import { NextResponse } from "next/server";

const blogs =[
    {
        id: 1,
        title: "blogs 1",
        desc: "blogs descpiction 1"

    },
    {
        id: 2,
        title: "blogs 2",
        desc: "blogs descpiction 2"

    },
    {
        id: 3,
        title: "blogs 3",
        desc: "blogs descpiction 3"

    },
    {
        id: 4,
        title: "blogs 4",
        desc: "blogs descpiction 4"

    },
]

export async function GET (req , {params}) {
      const Blog = blogs.find((data)=>data.id == params.id);
      if (Blog) {
        return NextResponse.json(Blog);
      }else{
        return NextResponse.json({error : "blog not found"});
      }
}