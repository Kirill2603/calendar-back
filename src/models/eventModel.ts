import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please enter event title'], minLength: 3, maxLength: 100 },
  description: { type: String, required: false, minLength: 3, maxLength: 100, default: '' },
  priority: { type: String, enum: ['low', 'middle', 'high'], default: 'low' },
  created: { type: Date, default: Date.now() },
  is_done: { type: Boolean, default: false },
  from: { type: Date, default: null },
  to: { type: Date, default: null },
}, { collection: 'events' })

export const event = mongoose.model('event', EventSchema)