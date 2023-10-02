import Champ from '@/models/champions';
import { connectToDB } from '@/utils/database';

export const POST = async (req, res) => {
  const { name, desc } = await req.json();

  try {
    await connectToDB();

    const newChamp = await Champ({
      name,
      desc
    });

    await newChamp.save();

    return new Response(JSON.stringify(newChamp), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to create Champ', { status: 500 });
  }
};
