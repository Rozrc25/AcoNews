const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

// Route to get top headlines
app.get('/api/news', async (req, res) => {
  const { country, category } = req.query;
  const API_KEY = 'bc1916c48a38c10e97e880b56497b99d';

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not set' });
  }

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&lang=en&apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Route to search for news articles
app.get('/api/search', async (req, res) => {
  const { query } = req.query; 
  const API_KEY = process.env.GNEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not set' });
  }

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
