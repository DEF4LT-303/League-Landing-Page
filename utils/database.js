import mongoose from 'mongoose';

let isConnceted = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnceted) {
    console.log('Connecting to existing DB connection 🚀...');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Special',
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnceted = true;

    console.log('Connected to DB 🚀...');
  } catch (error) {
    console.log('Error connecting to DB', error);
  }
};
