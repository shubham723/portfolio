import { NextResponse } from 'next/server';
import { Contact } from "@/backend/models/contact";
import dbConnect from "@/lib/dbConnect";

const createContact = (payload) => {
  const newContact = new Contact(payload);
	return newContact.save();
};

export async function POST(req){
  await dbConnect();
  try {
    const body = await req.json();
    const contact = await createContact(body);
    return NextResponse.json({ success: true, data: contact });
  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong', error: err?.message })
  }
}
