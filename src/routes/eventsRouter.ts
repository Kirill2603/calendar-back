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
  // try {
  //   res.send(await event.findById(req.params.id))
  // } catch (e: any) {
  //   res.statusCode = 500
  //   res.send(e.message)
  // }

  // const event = await eventsRepository.getEvent(req.params.id)
  // res.send(event)
})

eventsRouter.get('/', async (req, res) => {
  if (req.query.start && req.query.end) {
    try {
      const eventsForMonth = await event.find({date: {$gte: req.query.start, $lte: req.query.end}})
      res.send(eventsForMonth)
    } catch (e: any) {
      console.log(e);
    }
  } else {
    try {
      res.send(await event.find({}))
    } catch (e: any) {
      res.statusCode = 500
      res.send(e.message)
    }
}


  // if (req.query.start && req.query.end) {
  //   res.send(await eventsRepository.getEventsInterval(req.query.start as any, req.query.end as any))
  // } else res.send(await eventsRepository.getEvents())


})

eventsRouter.post('/', async (req, res) => {
  // try {
  //
  //   const newEvent = await event.create(req.body)
  //   res.send(newEvent)
  // } catch (e: any) {
  //   res.statusCode = 500
  //   res.send(e.message)
  // }
  const newEvent = await eventsRepository.addEvent(req.body)
  res.send(newEvent)
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
