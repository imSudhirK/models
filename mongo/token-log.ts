import { Schema, model } from "mongoose";

export interface TokenLog {
    accessToken: string;
    accessTokenExpiresAt: Date;
    createdAt?: Date;
    loggedOutAt?: Date;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
    status?: boolean;
    updatedAt?: Date;
    userId?: string;
    deviceName?: string;
    deviceIP?: string;
}

export const TokenSchema = new Schema<TokenLog>({
    accessToken: { type: String, required: true, unique: true },
    accessTokenExpiresAt: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
    loggedOutAt: { type: Date },
    refreshToken: { type: String, required: true, unique: true },
    refreshTokenExpiresAt: { type: Date, required: true },
    status: { type: Boolean, required: true, default: true },
    updatedAt: { type: Date, default: Date.now(), required: true },
    userId: { type: String, required: false },
    deviceName: { type: String, required: false },
    deviceIP: { type: String, required: false },
});

TokenSchema.index({ accessToken: 1 });

export default model<TokenLog>("tokenLog", TokenSchema);
