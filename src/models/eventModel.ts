import * as mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please enter event title'], minLength: 3, maxLength: 100 },
  description: { type: String, required: false, minLength: 3, maxLength: 100, default: '' },
  priority: { type: String, enum: ['low', 'middle', 'high'], default: 'low' },
  color: { type: String, enum: ['red', 'green', 'blue', 'purple', 'orange', 'yellow'], default: 'green' },
  date: { type: Date, required: true },
  is_done: { type: Boolean, default: false },
  start: { type: Date, default: null },
  end: { type: Date, default: null },
}, { collection: 'events' })

export const event = mongoose.model('event', EventSchema)