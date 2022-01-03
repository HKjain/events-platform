import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const user_id = req.query.userId;
    const { db } = await connectToDatabase();
    const findEvents = await db
      .collection('student_event')
      .find({ userId: user_id })
      .toArray();
    let eventIds = [];
    for (let i = 0; i < findEvents.length; i++) {
      eventIds.push({ _id: ObjectId(findEvents[i].eventId) });
    }
    const allevents = await db
      .collection('events')
      .find({ $or: eventIds })
      .toArray();

    // let events = [];
    // for (let i = 0; i < allevents.length; i++) {
    //   let e = { ...allevents[i] };
    //   delete e._id;
    //   e._id = allevents[i]._id.toString();
    //   events.push(e);
    // }

    res.json({ events: allevents });
    return;
  }
}

export default handler;
