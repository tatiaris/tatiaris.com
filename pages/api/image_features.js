'use strict';

import async from 'async';
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

// const async = require('async');
// const fs = require('fs');
// const https = require('https');
// const path = require("path");
// const createReadStream = require('fs').createReadStream
// const sleep = require('util').promisify(setTimeout);
// const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
// const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = 'fd1ef4a0860f4dd4b50974e3ce93c1c9';
const key2 = '6c500212b73a4c8bbe5ad71d799484fd';
const endpoint = 'https://cv-www-filter.cognitiveservices.azure.com/';

const computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

import nextConnect from 'next-connect';
const handler = nextConnect();

handler.get(async (req, res) => {
  const colorURLImage = req.query['imgUrl'];
  // const colorURLImage = 'https://tatiaris.com/img/wieat.png';
  const color = (await computerVisionClient.analyzeImage(colorURLImage, { visualFeatures: ['Color'] })).color;
  res.json({
    message: 'working',
    colorData: color
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
