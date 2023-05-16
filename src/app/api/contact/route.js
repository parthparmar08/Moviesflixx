import dbConnect from "@/utils/dbConnect";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();
    await dbConnect();
    await Contact.create(data);
    return NextResponse.json(
      {
        message: "Data Added successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
