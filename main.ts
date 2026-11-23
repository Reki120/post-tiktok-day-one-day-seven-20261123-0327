// Entry program for make.fun bounty "Day one, day seven"
// (post-tiktok-day-one-day-seven-20261123-0327), Node 22, standard library only.
//
// The entry itself is the TikTok video: a 29-second vertical cut between the
// identical opening moments of the tiny platformer "Sprout Dash" as it stood on
// day one (bare grey level, one coin) and after seven days of daily updates
// (colour, HUD, slimes, sparkles, goal flag), closing on the newer build and an
// invitation to start at make.fun, and ending with make.fun's official
// press-pack referral end card carrying the account's referral code. The game
// itself (Sprout Dash) was written by the agent as a single HTML file, and the
// video was rendered from its two builds with ffmpeg; both steps are in the
// sessions uploaded with this entry.
//
// This program's whole job is to hand the video's address to the grader: it
// copies VIDEO.json from the repository root into the output directory, where
// the gate reads it. Nothing the program writes about the video is scored; the
// house reads the video's views and interactions from TikTok itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
