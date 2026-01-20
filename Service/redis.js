import dotenv from "dotenv";
dotenv.config();

import Redis from "ioredis";

let redis;

function initializeRedis() {
  redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || undefined,
    maxRetriesPerRequest: 4,
    enableReadyCheck: true,
  });

  redis.on("connect", () => {
    console.log("✅ Redis connected");
  });

  redis.on("ready", () => {
    console.log("🚀 Redis ready");
  });

  redis.on("error", (err) => {
    console.error("❌ Redis real error:", err);
  });

  return redis;
}

export default initializeRedis;
