import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const userId = req.query.userId;

    const users_events = await db
      .collection('users_events')
      .findOne({ user_id: userId });

    if (!users_events) {
      res.json({ message: 'No Events for the Institute Exists!' });
      return;
    }

    var listOfEvents = users_events.event_ids;
    var findIds = [];
    for (let i = 0; i < listOfEvents.length; i++) {
      const eventId = listOfEvents[i];
      findIds.push({ _id: ObjectId(eventId) });
      // const event = await db
      //   .collection('events')
      //   .findOne({ _id: ObjectId(eventId) });
      // eventsDetails.push(event);
    }
    const eventsDetails = await db
      .collection('events')
      .find({ $or: findIds })
      .toArray();

    res.json({ events: eventsDetails });
  }
}
export default handler;
