import express from 'express'
import { event } from '../models/eventModel'

export const EventRouter = express.Router({ mergeParams: true })

EventRouter.put('/events/:id', async (req, res) => {
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

EventRouter.get('/events/:id', async (req, res) => {
  try {
    res.send(await event.findById(req.params.id))
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

EventRouter.get('/events', async (req, res) => {
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
})

EventRouter.post('/events', async (req, res) => {
  try {

    const newEvent = await event.create(req.body)
    res.send(newEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

EventRouter.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await event.findByIdAndDelete(req.params.id)
    res.send(deletedEvent)
  } catch (e: any) {
    res.statusCode = 500
    res.send(e.message)
  }
})

// import { Request, Response, Router } from 'express';
// import { productsRepository } from '../repositories/products-repository';

// export const productsRouter = Router({})

// productsRouter.get('/', async ( req: Request, res: Response) => {
//   const products = await productsRepository.getProducts()
//   res.send(products)
// })

// productsRouter.post('/', async (req: Request, res: Response) => {
//   const newProduct = await productsRepository.createProduct(req.body.title)
//   if (newProduct) {
//     res.status(201).send(newProduct)
//   } else {
//     res.sendStatus(404)
//   }
// })
