import express from 'express';
const router = express.Router();
import authRoutes from './authRoutes.js'
import spentsRoutes from './spentRoutes.js'

router.use('/auth', authRoutes)
router.use('/spent', spentsRoutes)

export default router;