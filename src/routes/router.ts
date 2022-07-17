import express from 'express'
import { event } from '../models/eventModel'

export const router = express.Router({ mergeParams: true })

router.put('/events/:id', async (req, res) => {
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

router.get('/events/:id', async (req, res) => {
  try {
    res.send(await event.findById(req.params.id))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.get('/events', async (req, res) => {
  if (req.query.start && req.query.end) {
    try {
      console.log(req.query.start, req.query.end);
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
})

router.post('/events', async (req, res) => {
  try {

    const newEvent = await event.create(req.body)
    res.send(newEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

router.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await event.findByIdAndDelete(req.params.id)
    res.send(deletedEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})