import express from 'express'
import { event } from '../models/eventModel'
import {eventsRepository} from "../eventRepository";

export const eventsRouter = express.Router({ mergeParams: true })

eventsRouter.put('/:id', async (req, res) => {
  try {
    res.send(await event.findByIdAndUpdate(req.params.id,
      { '$set': req.body },
      {
        new: true,
        runValidators: true,
      },))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

eventsRouter.get('/:id', async (req, res) => {
  try {
    res.send(await event.findById(req.params.id))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

eventsRouter.get('/', async (req, res) => {
//   if (req.query.start && req.query.end) {
//     try {
//       const eventsForMonth = await event.find({date: {$gte: req.query.start, $lte: req.query.end}})
//       res.send(eventsForMonth)
//     } catch (e: any) {
//       console.log(e);
//     }
//   } else {
//     try {
//       res.send(await event.find({}))
//     } catch (e: any) {
//       res.statusCode = 500
//       res.send(e.message)
//     }
// }
  const events = await eventsRepository.getEvents()
  res.send(events)
})

eventsRouter.post('/', async (req, res) => {
  try {

    const newEvent = await event.create(req.body)
    res.send(newEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

eventsRouter.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await event.findByIdAndDelete(req.params.id)
    res.send(deletedEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})
