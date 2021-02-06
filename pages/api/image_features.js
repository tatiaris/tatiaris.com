'use strict';

// const async = require('async');
// const fs = require('fs');
// const https = require('https');
// const path = require("path");
// const createReadStream = require('fs').createReadStream
// const sleep = require('util').promisify(setTimeout);
// const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
// const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = '<your subscription key>';
const endpoint = '<your api endpoint>';

// const computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

import nextConnect from 'next-connect';
const handler = nextConnect();

handler.get(async (req, res) => {
  const colorURLImage = req.query['imgUrl'];

  // Analyze URL image
  console.log('Analyzing image for color scheme...', colorURLImage.split('/').pop());
  // const color = (await computerVisionClient.analyzeImage(colorURLImage, { visualFeatures: ['Color'] })).color;
  // printColorScheme(color);
  res.json({
    message: 'working'
  });
});

handler.post(async (req, res) => {
  let data = req.body;
  try {
    await req.db.collection('nodes').insertOne(data);
  } catch (error) {
    console.log(error);
  }
  res.json({
    message: 'success'
  });
});

export default handler;
