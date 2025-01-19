import { Schema, model } from "mongoose";

export interface Notes {
    email: string;
    title?: string;
    description?: string;
    tag?: string;
    createdAt?: Date;
}

const NotesSchema = new Schema<Notes>({
    email: { type: String, required: true },
    title: { type: String, required: false },
    description: { type: String, required: false },
    tag: { type: String, required: false },
    createdAt: { type: Date, default: Date.now(), required: true },
});

NotesSchema.index({ userId: 1 });

export default model<Notes>("notes", NotesSchema);
