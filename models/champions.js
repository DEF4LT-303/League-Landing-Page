import { Schema, model, models } from 'mongoose';

const ChampionSchema = new Schema({
  name: {
    type: String
  },

  desc: {
    type: String
  }
});

const Champions = models.Champion || model('Champions', ChampionSchema);
export default Champions;
