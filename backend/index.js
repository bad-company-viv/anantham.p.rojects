const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./lib/supabase');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// Healthy Check
app.get('/', (req, res) => {
    res.json({ message: 'Lead Management Backend is running' });
});

// Create Lead
app.post('/api/leads', async (req, res) => {
    const { name, email, phone, interest, message } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Name, email, and phone are required' });
    }

    try {
        const { data, error } = await supabase
            .from('leads')
            .insert([
                { name, email, phone, interest, message, created_at: new Date().toISOString() }
            ])
            .select();

        if (error) throw error;

        res.status(201).json({ message: 'Lead stored successfully', data: data[0] });
    } catch (error) {
        console.error('Error storing lead:', error);
        res.status(500).json({ 
            error: 'Internal Server Error', 
            message: error.message, 
            details: error 
        });
    }
});

// Get Leads (for Admin)
app.get('/api/leads', async (req, res) => {
    const adminId = req.headers['x-admin-id'];
    const adminPass = req.headers['x-admin-password'];

    const EXPECTED_ID = process.env.ADMIN_ID || 'admin';
    const EXPECTED_PASS = process.env.ADMIN_PASSWORD || 'anantham';

    if (adminId !== EXPECTED_ID || adminPass !== EXPECTED_PASS) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
