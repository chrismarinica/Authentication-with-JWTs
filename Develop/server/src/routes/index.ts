import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';

// Import your seeders
import { seedUsers } from '../seeds/user-seeds.js';
import { seedTickets } from '../seeds/ticket-seeds.js';

const router = Router();

// Attach auth routes
router.use('/auth', authRoutes);

// ✅ TEMPORARY: Seeding Route
let hasSeeded = false; // Track if we've already seeded

router.get('/seed', async (_, res) => {
  if (hasSeeded) {
    return res.status(403).send('Seeding already completed.');
  }

  try {
    await seedUsers();
    await seedTickets();
    hasSeeded = true; // Mark as seeded
    return res.send('✅ Database seeding complete! You can now login.');
    console.log('✅ Database has been seeded!');
  } catch (error) {
    console.error('Seeding error:', error);
    return res.status(500).send('Seeding failed.');
  }
});

// ✅ Protect your actual APIs
router.use('/api', authenticateToken, apiRoutes);

export default router;
