import express from "express";

import Runner from "../models/runner.js";

const router = express.Router();

export const addNewRunner = async (req, res) => {
  //gathering values from request body
  const { name, radius, startedTime, endTime, numberOfLaps } = req.body;

  //create variable for the save values
  const newRunner = new Runner({
    name,
    radius,
    startedTime,
    endTime,
    numberOfLaps,
  });

  try {
    await newRunner.save();

    //speed calculation
    const circumferenceOfLaps = 2 * Math.PI * radius * numberOfLaps;
    const timeOfFinished = endTime - startedTime;
    const speed = circumferenceOfLaps / timeOfFinished;

    res.status(201).json({
      speed: speed, //return avarage speed with res.
    });

    console.log("new runner added");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
