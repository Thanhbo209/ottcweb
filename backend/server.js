const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios'); // For making API requests
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let memberCounts = {
  branch1: 0,
  branch2: 0,
  branch3: 0,
};

// Function to fetch member counts from Zalo API
const fetchMemberCounts = async () => {
  try {
    const response1 = await axios.get('https://api.zalo.me/group/branch1/members', { headers: { Authorization: 'Bearer YOUR_ACCESS_TOKEN' } });
    const response2 = await axios.get('https://api.zalo.me/group/branch2/members', { headers: { Authorization: 'Bearer YOUR_ACCESS_TOKEN' } });
    const response3 = await axios.get('https://api.zalo.me/group/branch3/members', { headers: { Authorization: 'Bearer YOUR_ACCESS_TOKEN' } });

    memberCounts.branch1 = response1.data.count;
    memberCounts.branch2 = response2.data.count;
    memberCounts.branch3 = response3.data.count;

    // Broadcast the new member counts to all connected clients
    broadcastMemberCounts();
  } catch (error) {
    console.error('Error fetching member counts from Zalo API:', error);
  }
};

// Broadcast function to send updates to all connected clients
const broadcastMemberCounts = () => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(memberCounts));
    }
  });
};

// Fetch member counts at regular intervals
setInterval(fetchMemberCounts, 60000); // Every 60 seconds

// Fetch member counts initially
fetchMemberCounts();

wss.on('connection', ws => {
  ws.send(JSON.stringify(memberCounts));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
