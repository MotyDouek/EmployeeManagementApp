import mongoose from "mongoose";
import workers from "../models/workers.js";

export const getWorkersList = async (req, res) => {
    try {
        const workersList = await workers.find();
        res.status(200).json(workersList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createWorker = async (req, res) => {
    const worker = req.body;
    const newWorker = new workers(worker);

    try {
        await newWorker.save();
        res.status(201).json(newWorker);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteWorker = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No worker with id: ${id}`);
    await workers.findByIdAndRemove(id);
    res.json({ message: "Worker deleted successfully." });
}

export const updateWorker = async (req, res) => {
    const { id } = req.params;
    const { name, joinedAt, title } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No worker with id: ${id}`);
    const updatedWorker = { name, joinedAt, title, _id: id };
    await workers.findByIdAndUpdate(id, updatedWorker, { new: true });
    res.json(updatedWorker);
}