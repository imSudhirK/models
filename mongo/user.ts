import { Schema, model } from "mongoose";

export interface User {
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
});

UserSchema.index({ email: 1 });

export default model<User>("users", UserSchema);
