import express from "express";
import Hotel from '../models/Hotel.js'

const router = express.Router()

// CREATE
router.post( '/', async ( req, res ) => {
   const hotel = new Hotel( req.body )
   try {
      const savedHotel = await hotel.save()
      res.status( 200 ).json( savedHotel )
   } catch ( err ) {
      res.status( 500 ).json( err )
   }
} )


// UPDATE
router.put( '/:id', async ( req, res ) => {
   try {
      const updatedHotel = await Hotel.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } )
      res.status( 200 ).json( updatedHotel )
   } catch ( err ) {
      res.status( 500 ).json( err )
   }
} )

// DELETE
router.delete( '/:id', async ( req, res ) => {
   try {
      await Hotel.findByIdAndDelete( req.params.id )
      res.status( 200 ).json( 'Hotel Info Deleted' )
   } catch ( err ) {
      res.status( 500 ).json( err )
   }
} )

// GET

router.get( '/:id', async ( req, res, next ) => {
   try {
      const hotel = await Hotel.findByd( req.params.id )
      res.status( 200 ).json( hotel )
   } catch ( err ) {
      res.status( 500 ).json( err )
   }
} )
// GET ALL

router.get( '/', async ( req, res ) => {
   try {
      const hotels = await Hotel.find()
      res.status( 200 ).json( hotels )
   } catch ( err ) {
      res.status( 500 ).json( err )
   }
} )



export default router;