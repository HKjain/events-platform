import { connectToDatabase } from '../../../util/mongodb';
async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const allEvents = await db.collection('events').find().toArray();
    let events = [];
    for (let i = 0; i < allEvents.length; i++) {
      let ev = { ...allEvents[i] };
      delete ev._id;
      ev._id = allEvents[i]._id.toString();
      events.push(ev);
    }

    res.json({ events: events });
  }
}
export default handler;
