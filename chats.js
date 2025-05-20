export function log(chats) {
  for (const chat of chats) {
    console.log(`LOG: ${chat.time} | ${chat.message}`);
  }
}

export const chats = [
  {
    time: "2023-01-01T12:00:00Z",
    message: "Mom, I need the doritos",
  },
  {
    time: "2023-01-01T12:02:00Z",
    message: "MOOOOOOOOM I really need the doritos",
  },
];
